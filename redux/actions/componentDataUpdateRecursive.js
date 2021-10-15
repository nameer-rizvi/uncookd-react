import { store } from "../store";
import { clone, isObject, isArray } from "simpul";
import { componentDataUpdate } from "./componentData";

export function componentDataUpdateRecursive({
  handleObject: _handleObject,
  handleArray: _handleArray,
}) {
  const { getState, dispatch } = store;

  let componentDataClone = clone(getState().componentData);

  function handleObject(object) {
    if (_handleObject) _handleObject(object);
    const objectKeys = Object.keys(object);
    for (let i = objectKeys.length - 1; i >= 0; i--) {
      handleType(object[objectKeys[i]]);
    }
  }

  function handleArray(array) {
    if (_handleArray) array = _handleArray(array);
    for (let i = array.length - 1; i >= 0; i--) {
      handleType(array[i]);
    }
  }

  const handleType = (data) =>
    (isObject(data) && handleObject(data)) ||
    (isArray(data) && handleArray(data));

  handleType(componentDataClone);

  dispatch(componentDataUpdate(componentDataClone));
}
