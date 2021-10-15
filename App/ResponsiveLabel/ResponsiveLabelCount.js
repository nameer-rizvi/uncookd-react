import React from "react";
import styled from "styled-components";
import { Span } from "../Element";
import { isNumber, generalizedCount } from "simpul";

const StyledSpan = styled(Span)`
  font-weight: bold;
`;

const ResponsiveLabelCount = ({ count }) =>
  isNumber(count) ? (
    <StyledSpan className="count">{generalizedCount(count)}</StyledSpan>
  ) : null;

export default ResponsiveLabelCount;
