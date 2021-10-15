import React from "react";
import {
  ArticleContainer,
  ArticleSectionLeft,
  ArticleSectionMain,
  ArticleHeader,
  ArticleSmall,
  ArticleFooter,
  ArticleTime,
  ArticleFooterList,
  ArticleSectionRight,
} from "../Article";
import { TooltipButton } from "../Tooltip";
import ArticleUserCounts from "./ArticleUserCounts";
import { SubscribeButton, SubscriberButtons } from "../Subscribe";

const ArticleUser = ({
  index,
  svg,
  id,
  user_id,
  username,
  bio,
  display_name,
  subscription,
  content_access,
  excludeTooltip,
  excludeTooltipSubscribeButton,
  excludeArticleSubscribeButton,
  excludeArticleSubscriberButtons,
  subscriber,
  ...metadata
}) => (
  <ArticleContainer id={index} className="article-user">
    <ArticleSectionLeft
      svg={svg || (content_access === false ? "lock" : "user")}
      $paddingRight={content_access === false && "26px"}
      title={content_access === false ? "User is private." : ""}
    />
    <ArticleSectionMain>
      <ArticleHeader>
        <TooltipButton
          Template="TooltipButtonUser"
          user_id={user_id || id}
          username={username}
          display_name={display_name}
          bio={bio}
          subscription={subscription}
          content_access={content_access}
          excludeTooltip={excludeTooltip}
          excludeSubscribeButton={excludeTooltipSubscribeButton}
          {...metadata}
        />
      </ArticleHeader>
      {bio ? <ArticleSmall $marginTop>{bio}</ArticleSmall> : null}
      <ArticleFooter>
        <ArticleTime index={index} {...metadata} />
        <ArticleFooterList
          list={ArticleUserCounts({ username, display_name, ...metadata })}
        />
      </ArticleFooter>
    </ArticleSectionMain>
    <ArticleSectionRight>
      {!excludeArticleSubscribeButton ? (
        <SubscribeButton
          type="user"
          user_id={user_id || id}
          subscription={subscription}
          name={{ username, display_name }}
        />
      ) : null}
      {!excludeArticleSubscriberButtons ? (
        <SubscriberButtons
          user_id={user_id || id}
          subscriber={subscriber}
          name={{ username, display_name }}
          style={{ marginLeft: 10 }}
        />
      ) : null}
    </ArticleSectionRight>
  </ArticleContainer>
);

export default ArticleUser;
