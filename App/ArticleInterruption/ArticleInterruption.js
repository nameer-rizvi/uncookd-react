import React from "react";
import ArticleInterruptionStyled from "./ArticleInterruptionStyled";
import {
  ArticleSectionLeft,
  ArticleSectionMain,
  ArticleHeader,
  ArticleP,
} from "../Article";
import { Button, Small } from "../Element";

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
      <Button title={title + " " + description} href={href} initialStyle>
        <Small>Advertisement.</Small>
        <ArticleHeader>{title}</ArticleHeader>
        <ArticleP>{description}</ArticleP>
      </Button>
    </ArticleSectionMain>
  </ArticleInterruptionStyled>
);

export default ArticleInterruption;
