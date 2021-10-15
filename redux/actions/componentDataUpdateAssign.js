import { store } from "../store";
import { clone } from "simpul";
import { componentDataUpdate } from "./componentData";

export function componentDataUpdateAssign(update) {
  const { getState, dispatch } = store;

  const componentNames = Object.keys(update);

  componentNames.forEach((componentName) => {
    const componentDataClone = clone(getState().componentData[componentName]);

    const updateClone = clone(update[componentName]);

    if (componentDataClone) {
      const componentDataWithUpdate = {
        [componentName]: Object.assign(componentDataClone, updateClone),
      };

      dispatch(componentDataUpdate(componentDataWithUpdate));
    }
  });
}
