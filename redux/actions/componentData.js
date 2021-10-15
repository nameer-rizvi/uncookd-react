import { isObject, isArray, isString } from "simpul";

export const componentDataInitialState = {
  comment: {},
  home: {},
  profile: {},
  settings: {},
  story: {},
  write: {},
};

export const COMPONENT_DATA_UPDATE = "COMPONENT_DATA_UPDATE";

export const COMPONENT_DATA_UNMOUNT = "COMPONENT_DATA_UNMOUNT";

export const COMPONENT_DATA_RESET = "COMPONENT_DATA_RESET";

export const componentDataUpdate = (payload) => ({
  type: COMPONENT_DATA_UPDATE,
  payload: isObject(payload) ? payload : {},
});

export const componentDataUnmount = (payload) => ({
  type: COMPONENT_DATA_UNMOUNT,
  payload: isArray(payload) ? payload : isString(payload) ? [payload] : [],
});

export const componentDataReset = () => ({ type: COMPONENT_DATA_RESET });
