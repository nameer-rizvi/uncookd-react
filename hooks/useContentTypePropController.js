import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRequestState } from "./useRequestState";
import { renderModalComponent } from "../utils";
import updateReduxState from "./useContentTypePropControllerUpdateReduxState";
import { request } from "../utils";
import { isNumber, isBoolean } from "simpul";

export function useContentTypePropController(config = {}) {
  // DESTRUCTURE CONSTANTS.

  const { propName, id, type, endpoint, paramName, immediate } = config;

  // VALIDATIONS.

  if (!propName) console.warn("Missing 'propName'.");

  if (!id) console.warn("Missing 'id'.");

  if (!type) console.warn("Missing 'type' prop.");

  if (!endpoint) console.warn("Missing 'endpoint' url.");

  if (!paramName) console.warn("Missing 'paramName'.");

  // STATE + HOOKS.

  const initialState = config[propName];

  const [state, setState] = useState(initialState);

  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector((state) => state.user);

  const requestState = useRequestState();

  const requestCondition = Boolean(!requestState.pending && id);

  // UTIL.

  const util = {
    login: () => renderModalComponent({ location: "/account/login" }),
    immediateUpdate: () =>
      immediate &&
      setState(
        isNumber(state) ? (state ? 0 : 1) : isBoolean(state) ? !state : ""
      ),
    updateState: (responseData) => {
      setState(responseData[propName]);
      updateReduxState({ dispatch, type, id, propName, responseData });
    },
  };

  // API.

  const api = !isLoggedIn
    ? { delete: util.login, post: util.login, login: util.login }
    : {
        delete: () =>
          request({
            requestCondition,
            method: "DELETE",
            url: endpoint,
            params: { [paramName]: id },
            onStart: util.immediateUpdate,
            onSuccess: util.updateState,
            ...requestState,
          }),
        post: () =>
          request({
            requestCondition,
            method: "POST",
            url: endpoint,
            data: { [paramName]: id },
            onStart: util.immediateUpdate,
            onSuccess: util.updateState,
            ...requestState,
          }),
        put: () =>
          request({
            requestCondition,
            method: "PUT",
            url: endpoint,
            data: { [paramName]: id },
            onStart: util.immediateUpdate,
            onSuccess: util.updateState,
            ...requestState,
          }),
      };

  // UPDATE STATE ON EXTERNAL UPDATE.

  useEffect(() => {
    const stateExists = state || isNumber(state) || isBoolean(state);
    if (stateExists && state !== initialState) setState(initialState);
  }, [initialState]); // eslint-disable-line react-hooks/exhaustive-deps

  // RETURN PROPS.

  return {
    state,
    isLoggedIn,
    error: requestState.error,
    pending: requestState.pending,
    ...api,
  };
}
