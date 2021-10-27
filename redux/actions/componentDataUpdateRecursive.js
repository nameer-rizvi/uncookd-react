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
    for (let objectKey of objectKeys) handleType(object[objectKey]);
  }

  function handleArray(array) {
    if (_handleArray) array = _handleArray(array);
    for (let item of array) handleType(item);
  }

  const handleType = (data) =>
    (isObject(data) && handleObject(data)) ||
    (isArray(data) && handleArray(data));

  handleType(componentDataClone);

  dispatch(componentDataUpdate(componentDataClone));
}
