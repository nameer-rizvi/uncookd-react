import React from "react";
import { ArticleSectionLeft } from "../Article";
import { isNumber } from "simpul";

function ArticleStorySectionLeft({ svg, count_views }) {
  const title = isNumber(count_views) ? count_views + " views." : "";

  return <ArticleSectionLeft count={count_views} title={title} svg={svg} />;
}

export default ArticleStorySectionLeft;
