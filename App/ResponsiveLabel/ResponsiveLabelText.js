import React from "react";
import styled from "styled-components";
import { Span } from "../Element";
import ResponsiveLabelCount from "./ResponsiveLabelCount";
import { numberLabel } from "simpul";

const StyledSpan = styled(Span)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .count {
    margin-bottom: 4px;
  }
`;

const ResponsiveLabelText = ({ plural, count, label }) => (
  <StyledSpan>
    <ResponsiveLabelCount count={count} />
    {numberLabel(plural ? 2 : count, label).label}
  </StyledSpan>
);

export default ResponsiveLabelText;
