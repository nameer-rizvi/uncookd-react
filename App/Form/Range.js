import React from "react";
import { assignId } from "../../utils";
import { dictionary } from "../../../shared";
import RangeStyled from "./RangeStyled";

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range

function Range({ value, ...rest }) {
  assignId(rest);

  const { min = 0, max = 10 } = dictionary.get(rest.name);

  return (
    <RangeStyled
      type="range"
      step={0.25}
      min={min}
      max={max}
      value={value || min}
      {...rest}
    />
  );
}

export default Range;
