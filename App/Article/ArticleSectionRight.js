import React from "react";
import styled from "styled-components";
import { Section } from "../Element";

const StyledSection = styled(Section)`
  padding-top: 4px;
  .article-right-div {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
`;

const ArticleSectionRight = ({ children, ...props }) => (
  <StyledSection className="article-right" {...props}>
    <div className="article-right-div">{children}</div>
  </StyledSection>
);

export default ArticleSectionRight;
