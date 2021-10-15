import React from "react";
import { isObject, isString, trimPunctuation } from "simpul";

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option

const SelectOptions = ({ options }) =>
  options
    .map((option, index) =>
      isObject(option) ? (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ) : isString(option) ? (
        <option key={index} value={trimPunctuation(option, "")}>
          {option}
        </option>
      ) : null
    )
    .filter(Boolean);

export default SelectOptions;
