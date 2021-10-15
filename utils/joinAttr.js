import { isString, trim, isNumber } from "simpul";

const cleaner = (i) =>
  isString(i) ? trim(i, "").toLowerCase() : isNumber(i) ? i.toString() : null;

export const joinAttr = {
  id: (arr) =>
    arr
      .map(cleaner)
      .filter(Boolean)
      .join("-")
      .replaceAll("_", "-"),
  className: (arr) =>
    arr
      .map(cleaner)
      .filter(Boolean)
      .join(" "),
};
