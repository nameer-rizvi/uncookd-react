import React, { useState } from "react";
import { snakeCase } from "change-case";
import { useRequestState } from "../../hooks";
import { noop } from "simpul";
import { AutosuggestContainer } from "./AutosuggestStyled";
import AutosuggestInput from "./AutosuggestInput";
import AutosuggestList from "./AutosuggestList";

function Autosuggest({
  initialValue = "",
  onAction,
  setQ,
  includeCaption,
  hideAutosuggest,
  ...rest
}) {
  if (!rest.id) console.warn("Missing 'id' for autosuggest with props: ", rest);

  if (!rest.name && rest.id) rest.name = snakeCase(rest.id);

  const [value, setValue] = useState(initialValue);

  const [rows, setRows] = useState();

  const requestState = useRequestState();

  function reset() {
    setRows();
    requestState.setPending();
    if (requestState.cancelSource.cancel) requestState.cancelSource.cancel();
  }

  const onActionWithSetValue = onAction
    ? (item) => onAction(item, setValue)
    : noop;

  const AutosuggestListProps = {
    setQ,
    includeCaption,
    reset,
    setRows,
    rows,
    onAction: onActionWithSetValue,
    inputId: rest.id,
    inputName: rest.name,
    inputValue: value,
    ...requestState,
  };

  return (
    <AutosuggestContainer>
      <AutosuggestInput
        value={value}
        setValue={setValue}
        reset={reset}
        {...rest}
      />
      {!hideAutosuggest ? <AutosuggestList {...AutosuggestListProps} /> : null}
    </AutosuggestContainer>
  );
}

export default Autosuggest;
