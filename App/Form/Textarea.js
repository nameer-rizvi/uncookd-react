import React from "react";
import { assignId } from "../../utils";
import { dictionary } from "../../../shared";
import { StyledTextarea } from "./TextareaStyled";

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea

function Textarea({ value = "", ...rest }) {
  assignId(rest);

  const { minLength = 0, maxLength = 500 } = dictionary.get(rest.name);

  return (
    <StyledTextarea
      type="text"
      autoComplete="on"
      autoCorrect="on"
      autoCapitalize="on"
      spellCheck="true"
      value={value}
      minLength={minLength}
      maxLength={maxLength}
      {...rest}
    />
  );
}

export default Textarea;
