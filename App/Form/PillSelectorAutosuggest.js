import React from "react";
import { isStringValid } from "simpul";
import Autosuggest from "../Autosuggest";

function PillSelectorAutosuggest({
  onChange: formOnChange,
  value: formValues = [],
  valueKey,
  ...AutosuggestProps
}) {
  function addNewValue(newValue, setValue, refocus) {
    formOnChange([...formValues, newValue.trim()]);
    if (setValue) setValue("");
    if (refocus) document.getElementById(AutosuggestProps.id).focus();
  }

  AutosuggestProps.onKeyDown = (e, setValue) => {
    const inputValue = e.target.value;
    if (
      e.key === "Backspace" &&
      !inputValue &&
      formValues &&
      formValues.length
    ) {
      formOnChange(formValues.slice(0, -1));
      setValue(formValues[formValues.length - 1]);
    } else if (e.key === "Enter" && isStringValid(inputValue)) {
      e.preventDefault();
      addNewValue(inputValue, setValue);
    }
  };

  AutosuggestProps.onChange = ({ target: { value: inputValue } }, setValue) =>
    isStringValid(inputValue) && inputValue.slice(-1) === " "
      ? addNewValue(inputValue, setValue)
      : setValue(inputValue);

  AutosuggestProps.onBlur = ({ target: { value: inputValue } }, setValue) =>
    isStringValid(inputValue) && addNewValue(inputValue, setValue);

  AutosuggestProps.onAction = (item, setValue) =>
    addNewValue(item[valueKey], setValue, "refocus");

  return <Autosuggest {...AutosuggestProps} />;
}

export default PillSelectorAutosuggest;
