import React from "react";
import ArticleInterruptionStyled from "./ArticleInterruptionStyled";
import ArticleInterruptionContainer from "./ArticleInterruptionContainer";
import {
  ArticleSectionLeft,
  ArticleSectionMain,
  ArticleHeader,
  ArticleP,
} from "../Article";
import { Small } from "../Element";

const ArticleInterruption = ({
  index = "",
  svg = "ad",
  title = "",
  description = "",
  href = "",
}) => (
  <ArticleInterruptionStyled id={index} className="article-interruption">
    <ArticleSectionLeft svg={svg} />
    <ArticleSectionMain>
      <ArticleInterruptionContainer {...{ title, description, href }}>
        <Small>Pardon the interruption...</Small>
        <ArticleHeader>{title}</ArticleHeader>
        <ArticleP>{description}</ArticleP>
      </ArticleInterruptionContainer>
    </ArticleSectionMain>
  </ArticleInterruptionStyled>
);

export default ArticleInterruption;
