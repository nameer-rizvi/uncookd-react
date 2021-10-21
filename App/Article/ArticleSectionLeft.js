import React from "react";
import styled from "styled-components";
import { Section, H1_2, SVG, SVGSize } from "../Element";
import { isNumber, generalizedCount } from "simpul";

const StyledSection = styled(Section)`
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  min-width: ${({ $width }) => $width || "100px"};
  max-width: ${({ $width }) => $width || "100px"};
  padding-right: ${({ $paddingRight }) => $paddingRight || "24px"};
`;

const ArticleSectionLeft = ({
  label,
  count,
  svg,
  title = "",
  size = "l",
  ...rest
}) =>
  label ? (
    <StyledSection className="article-left" {...rest}>
      <H1_2 title={title}>{label}</H1_2>
    </StyledSection>
  ) : isNumber(count) ? (
    <StyledSection className="article-left" {...rest}>
      <H1_2 title={title}>{generalizedCount(count)}</H1_2>
    </StyledSection>
  ) : svg ? (
    <StyledSection className="article-left" {...rest}>
      <SVG name={svg} style={SVGSize[size]} title={title} />
    </StyledSection>
  ) : null;

export default ArticleSectionLeft;
