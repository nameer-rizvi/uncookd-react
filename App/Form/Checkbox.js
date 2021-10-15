import React from "react";
import { assignId } from "../../utils";
import { Button } from "../Element";
import { dictionary } from "../../../shared";

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox

function Checkbox({ value, onChange, ...rest }) {
  assignId(rest);

  value = Boolean(value);

  const { label } = dictionary.get(rest.name);

  return (
    <Button
      tabIndex="0"
      role="checkbox"
      aria-checked={value}
      aria-labelledby={rest.id}
      title={`Checkbox for ${label}.`}
      svg={"checkbox_" + value.toString()}
      onClick={() => onChange({ target: { value: value ? 0 : 1 } })}
      style={{ height: "fit-content" }}
      $align="baseline"
      {...rest}
    />
  );
}

export default Checkbox;
