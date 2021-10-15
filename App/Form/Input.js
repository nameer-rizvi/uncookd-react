import React, { Fragment } from "react";
import { assignId } from "../../utils";
import { dictionary } from "../../../shared";
import { trimBoundary } from "simpul";
import InputStyled from "./InputStyled";
import styled from "styled-components";

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text

export function Input({ value = "", ...rest }) {
  assignId(rest);

  const {
    minLength = 0,
    maxLength = 100,
    minLengthArrayItem,
    maxLengthArrayItem,
    regex = [],
  } = dictionary.get(rest.name);

  let r = regex[regex.length - 1] && regex[regex.length - 1].r;

  if (r) rest.pattern = trimBoundary(r.toString());

  return (
    <Fragment>
      <InputStyled
        type="text"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        value={value}
        minLength={minLengthArrayItem || minLength}
        maxLength={maxLengthArrayItem || maxLength}
        {...rest}
      />
      {rest.required ? <span className="validation-status" /> : null}
    </Fragment>
  );
}

export const InputWithBorder = styled(Input)`
  border-bottom: ${({ theme }) => theme.border[1]};
  border-radius: 0;
`;
