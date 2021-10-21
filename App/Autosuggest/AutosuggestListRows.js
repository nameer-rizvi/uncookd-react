import React from "react";
import {
  AutosuggestListUL,
  AutosuggestListItemButton,
} from "./AutosuggestStyled";
import { snakeCase } from "change-case";
import AutosuggestUtils from "./AutosuggestUtils";
import AutosuggestOnKeyDown from "./AutosuggestOnKeyDown";
import { markMatches } from "../../utils";
import { LI } from "../Element";

const AutosuggestListRows = ({
  rows,
  onAction,
  reset,
  inputId,
  inputValue,
}) => (
  <AutosuggestListUL>
    {rows.map((row, index) => {
      const title = `Select ${row.label}.`;

      const name = snakeCase(row.link);

      const className = AutosuggestUtils.makeListItemClassName(index);

      function onClick() {
        if (onAction) onAction(row);
        reset();
      }

      const onKeyDown = (e) =>
        AutosuggestOnKeyDown(e, inputId, index, onClick, reset);

      let __html = markMatches({ string: row.label, mark: inputValue });

      if (row.caption) __html += ` (${row.caption})`;

      return row.label ? (
        <LI key={index}>
          <AutosuggestListItemButton
            title={title}
            name={name}
            className={className}
            onClick={onClick}
            onKeyDown={onKeyDown}
            dangerouslySetInnerHTML={{ __html }}
          />
        </LI>
      ) : null;
    })}
  </AutosuggestListUL>
);

export default AutosuggestListRows;
