import React from "react";
import AutosuggestOnKeyDown from "./AutosuggestOnKeyDown";
import AutosuggestOnBlur from "./AutosuggestOnBlur";
import { InputWithBorder } from "../Form";

function AutosuggestInput({
  onKeyDown: customOnKeyDown,
  onChange: customOnChange,
  onBlur: customOnBlur,
  setValue,
  reset,
  ...rest
}) {
  function onKeyDown(e) {
    AutosuggestOnKeyDown(e);
    if (customOnKeyDown) customOnKeyDown(e, setValue, reset);
  }

  const onChange = (e) =>
    customOnChange
      ? customOnChange(e, setValue, reset)
      : setValue(e.target.value);

  const onBlur = (e) =>
    AutosuggestOnBlur(e, rest.id, reset, customOnBlur, setValue);

  return (
    <InputWithBorder
      type="search"
      onKeyDown={onKeyDown}
      onChange={onChange}
      onBlur={onBlur}
      {...rest}
    />
  );
}

export default AutosuggestInput;
