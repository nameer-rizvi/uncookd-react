import React, { useState, useEffect } from "react";
import AutosuggestUtils from "./AutosuggestUtils";
import { trim } from "simpul";
import useAutosuggestListRequest from "./AutosuggestListRequest";
import { AutosuggestListContainer } from "./AutosuggestStyled";
import AutosuggestOnBlur from "./AutosuggestOnBlur";
import Loader from "../Loader";
import AutosuggestListRows from "./AutosuggestListRows";

function AutosuggestList({
  inputId,
  inputValue,
  reset,
  pending,
  rows,
  onAction,
  ...requestProps
}) {
  const [topPosition, setTopPosition] = useState();

  useEffect(() => {
    setTopPosition(AutosuggestUtils.getInputElement(inputId).offsetHeight);
  }, [inputId]);

  inputValue = trim(inputValue);

  useAutosuggestListRequest({ reset, inputValue, ...requestProps });

  const showAutosuggest = Boolean(
    inputValue && (pending || (rows && rows.length))
  );

  return showAutosuggest ? (
    <AutosuggestListContainer
      $topPosition={topPosition}
      onBlur={(e) => AutosuggestOnBlur(e, inputId, reset)}
    >
      {pending ? (
        <Loader />
      ) : (
        <AutosuggestListRows
          rows={rows}
          onAction={onAction}
          reset={reset}
          inputId={inputId}
          inputValue={inputValue}
        />
      )}
    </AutosuggestListContainer>
  ) : null;
}

export default AutosuggestList;
