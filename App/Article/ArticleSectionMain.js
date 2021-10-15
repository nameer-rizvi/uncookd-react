import React from "react";
import styled from "styled-components";
import { Section } from "../Element";

const StyledSection = styled(Section)`
  flex-direction: column;
  flex-grow: 1;
  align-items: flex-start;
  justify-content: center;
  border-left: ${({ theme }) => theme.border[5]};
  padding: 0 15px 0 20px;
`;

const ArticleSectionMain = (props) => (
  <StyledSection className="article-main" {...props} />
);

export default ArticleSectionMain;
