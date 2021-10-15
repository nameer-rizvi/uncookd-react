import { store } from "../store";
import { userUpdate } from "./user";
import { componentDataUpdate, componentDataUnmount } from "./componentData";

export function onSettingsFormSuccess({ formValues }) {
  const { getState, dispatch } = store;

  const userState = getState().user;

  const settingsState = getState().componentData.settings;

  Object.keys(formValues).forEach((formValueKey) => {
    if (Object.keys(userState).includes(formValueKey))
      userState[formValueKey] = formValues[formValueKey];

    if (Object.keys(settingsState).includes(formValueKey))
      settingsState[formValueKey] = formValues[formValueKey];
  });

  dispatch(userUpdate(userState));

  dispatch(componentDataUpdate({ settings: settingsState }));

  dispatch(componentDataUnmount(["write", "profile"]));
}
