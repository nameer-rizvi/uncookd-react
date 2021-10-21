import React from "react";
import {
  ArticleContainer,
  ArticleSectionLeft,
  ArticleSectionMain,
  ArticleHeader,
  ArticleHeading,
  ArticleP,
  ArticleSectionRight,
} from "../Article";
import ArticleErrorLabelResolver from "./ArticleErrorLabelResolver";
import ArticleErrorResolveButton from "./ArticleErrorResolveButton";
import { B } from "../Element";
import { dateformat, capitalize, isDate } from "simpul";

const ArticleError = ({ index, id, ...rest }) => (
  <ArticleContainer id={index} className="article-error">
    <ArticleSectionLeft svg="error" size="xxl" />
    <ArticleSectionMain>
      <ArticleHeader style={{ marginBottom: 5 }}>
        <ArticleHeading>
          ERROR: &quot;{(rest.message && rest.message.trim()) || ""}&quot;
        </ArticleHeading>
      </ArticleHeader>
      {Object.keys(ArticleErrorLabelResolver).map((dataKey) => (
        <ArticleP key={dataKey}>
          <B>{ArticleErrorLabelResolver[dataKey]}</B>:{" "}
          {rest[dataKey]
            ? dataKey !== "ip" && isDate(rest[dataKey])
              ? dateformat(rest[dataKey])
              : capitalize(rest[dataKey].toString())
            : ""}
        </ArticleP>
      ))}
    </ArticleSectionMain>
    <ArticleSectionRight>
      <ArticleErrorResolveButton index={index} id={id} />
    </ArticleSectionRight>
  </ArticleContainer>
);

export default ArticleError;
