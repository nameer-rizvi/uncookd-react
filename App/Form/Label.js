import React from "react";
import styled from "styled-components";

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label
//
// "htmlFor" has to be provided separately:
// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md

export function Label({ htmlFor, ...rest }) {
  if (!htmlFor) console.warn("Missing 'htmlFor' for label with props: ", rest);
  return <label htmlFor={htmlFor} {...rest} />;
}

export const LabelRight = styled(Label)`
  margin-right: 10px;
  text-align: right;
`;

export const LabelTop = styled(Label)`
  margin-bottom: 25px;
`;
