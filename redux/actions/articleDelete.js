import { isObject } from "simpul";
import { componentDataUpdateRecursive } from "./componentDataUpdateRecursive";

export const articleDelete = (content_type, id) =>
  componentDataUpdateRecursive({
    handleArray: (array) => {
      const finder = (object) =>
        isObject(object) &&
        object.content_type === content_type + "_article" &&
        (object[content_type + "_id"]
          ? object[content_type + "_id"] === id
          : object.id === id);

      const index = array.findIndex(finder);

      if (index !== -1) array[index] = undefined;

      return array;
    },
  });
