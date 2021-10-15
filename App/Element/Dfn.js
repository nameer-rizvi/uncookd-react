import React from "react";
import styled from "styled-components";
import { joinAttr } from "../../utils";

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dfn

const StyledDfn = styled.dfn`
  font-style: ${({ $fontStyle = "normal" }) => $fontStyle};
`;

export function Dfn({ def, ...rest }) {
  if (!def) console.warn("Missing 'def' for Dfn with props: ", rest);
  return <StyledDfn id={joinAttr.id([def, "def"])} {...rest} />;
}
