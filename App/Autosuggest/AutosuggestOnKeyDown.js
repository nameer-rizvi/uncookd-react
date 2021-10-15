import AutosuggestUtils from "./AutosuggestUtils";
import { isNumber } from "simpul";

function AutosuggestOnKeyDown(e = {}, inputId, index, onEnter, reset) {
  const key = e.keyCode || e.charCode;

  const listElements = AutosuggestUtils.getListElements();

  const inputElement = AutosuggestUtils.getInputElement(inputId);

  const prevRow = !isNumber(index)
    ? listElements[listElements.length - 1]
    : listElements[index - 1]
    ? listElements[index - 1]
    : inputElement;

  const nextRow = !isNumber(index)
    ? listElements[0]
    : listElements[index + 1]
    ? listElements[index + 1]
    : inputElement;

  function handleE(fn) {
    e.preventDefault();
    if (fn.focus) {
      fn.focus();
    } else fn();
  }

  if (key === 38 && prevRow) {
    handleE(prevRow);
  } else if (key === 40 && nextRow) {
    handleE(nextRow);
  } else if (key === 13 && onEnter) {
    handleE(onEnter);
  } else if (key === 9 && !listElements[index + 1] && reset) {
    handleE(reset);
  }
}

export default AutosuggestOnKeyDown;
