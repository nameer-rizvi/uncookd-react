import React from "react";
import {
  ArticleContainer,
  ArticleSectionLeft,
  ArticleSectionMain,
  ArticleHeader,
  ArticleFooter,
  ArticleTime,
  ArticleFooterList,
  ArticleSectionRight,
} from "../Article";
import { TooltipButton } from "../Tooltip";
import ArticleHashtagCounts from "./ArticleHashtagCounts";
import { SubscribeButton } from "../Subscribe";

const ArticleHashtag = ({
  index = "",
  hashtag = "",
  subscription,
  excludeTooltip,
  excludeTooltipSubscribeButton,
  excludeArticleSubscribeButton,
  ...metadata
}) => (
  <ArticleContainer id={index} className="article-hashtag">
    <ArticleSectionLeft svg="hashtag" />
    <ArticleSectionMain>
      <ArticleHeader>
        <TooltipButton
          Template="TooltipButtonHashtag"
          hashtag={hashtag}
          subscription={subscription}
          excludeTooltip={excludeTooltip}
          excludeSubscribeButton={excludeTooltipSubscribeButton}
          {...metadata}
        />
      </ArticleHeader>
      <ArticleFooter>
        <ArticleTime index={index} {...metadata} />
        <ArticleFooterList
          list={ArticleHashtagCounts({ hashtag, ...metadata })}
        />
      </ArticleFooter>
    </ArticleSectionMain>
    <ArticleSectionRight>
      {!excludeArticleSubscribeButton ? (
        <SubscribeButton
          type="hashtag"
          hashtag={hashtag}
          subscription={subscription}
        />
      ) : null}
    </ArticleSectionRight>
  </ArticleContainer>
);

export default ArticleHashtag;
