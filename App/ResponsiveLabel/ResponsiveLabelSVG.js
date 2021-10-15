import React from "react";
import styled from "styled-components";
import { Span, SVG, SVGSize } from "../Element";
import ResponsiveLabelCount from "./ResponsiveLabelCount";

const StyledSpan = styled(Span)`
  align-items: baseline;
  display: flex;
  .count {
    margin-left: 4px;
  }
`;

const ResponsiveLabelSVG = ({ svg, count }) =>
  svg ? (
    <StyledSpan>
      <SVG {...SVGSize.l} {...svg} /> <ResponsiveLabelCount count={count} />
    </StyledSpan>
  ) : null;

export default ResponsiveLabelSVG;
