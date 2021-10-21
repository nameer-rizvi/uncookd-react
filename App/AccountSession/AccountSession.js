import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRequestState } from "../../hooks";
import { request } from "../../utils";
import { isNumber } from "simpul";
import { userUpdate, userReset } from "../../redux";
import AccountSessionPushManager from "./AccountSessionPushManager";
import Loader from "../Loader";
import AccountSessionMaintenanceMode from "./AccountSessionMaintenanceMode";

function AccountSession({ children = null }) {
  const dispatch = useDispatch();

  const requestState = useRequestState({ initialPending: true });

  useEffect(() => {
    requestState.allowAnonymousRequest = true;

    requestState.method = "POST";

    requestState.url = "/user/account/session";

    requestState.onSuccess = (responseData = {}) => {
      const { id, count_notifications_new } = responseData;

      responseData.isLoggedIn = isNumber(id);

      if (count_notifications_new)
        responseData.count_notifications_new_total = Object.keys(
          count_notifications_new
        ).reduce((counter, key) => counter + count_notifications_new[key], 0);

      dispatch(userUpdate(responseData));
    };

    requestState.onFail = () => dispatch(userReset());

    requestState.onFinish = AccountSessionPushManager;

    request(requestState);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return requestState.pending ? (
    <Loader />
  ) : requestState.error && requestState.error.toString().includes("503") ? (
    <AccountSessionMaintenanceMode />
  ) : (
    children
  );
}

export default AccountSession;
