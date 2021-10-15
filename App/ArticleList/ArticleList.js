import React, { useMemo } from "react";
import ArticleListStyled from "./ArticleListStyled";
import ArticleListItems from "./ArticleListItems";

const ArticleList = ({ rows, ...rest }) =>
  useMemo(
    () =>
      rows && rows.length ? (
        <ArticleListStyled className="article-list">
          <ArticleListItems rows={rows} {...rest} />
        </ArticleListStyled>
      ) : null,
    [rows] // eslint-disable-line react-hooks/exhaustive-deps
  );

export default ArticleList;
