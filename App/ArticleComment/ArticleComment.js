import React from "react";
import {
  ArticleContainer,
  ArticleSectionLeft,
  ArticleSectionMain,
  ArticleHeader,
  ArticleFooter,
  ArticleFooterList,
  ArticleTime,
} from "../Article";
import {
  CommentText,
  CommentDelete,
  CommentTags,
  CommentRibbons,
} from "../CommentElement";
import { TooltipButtonAuthor } from "../Tooltip";
import ArticleCommentReply from "./ArticleCommentReply";
import ArticleCommentContext from "./ArticleCommentContext";
import ArticleCommentCounts from "./ArticleCommentCounts";

const ArticleComment = ({
  index = "",
  comment_text,
  comment_id,
  id,
  plainTextAuthorTooltip,
  excludeAuthorTooltip,
  excludeAuthorTooltipSubscribeButton,
  comment_reply_id,
  comment_reply_author_username,
  comment_reply_author_display_name,
  story_slug,
  story_title,
  story_author_display_name,
  story_author_username,
  onDelete,
  excludeReply,
  excludeTags,
  ...metadata
}) => (
  <ArticleContainer id={index} className="article-comment">
    <ArticleSectionLeft svg="comment" />
    <ArticleSectionMain>
      <ArticleHeader>
        <CommentText comment_text={comment_text} id={comment_id || id} />
      </ArticleHeader>
      <ArticleFooter>
        <ArticleFooterList
          list={[
            <TooltipButtonAuthor
              className="comment-article-author"
              makeLabel={(authorName) => "-- " + authorName}
              plainTextOnly={plainTextAuthorTooltip}
              excludeTooltip={excludeAuthorTooltip}
              excludeTooltipSubscribeButton={
                excludeAuthorTooltipSubscribeButton
              }
              {...metadata}
            />,
            !excludeReply && <ArticleCommentReply id={comment_id || id} />,
            metadata.author_is_user && (
              <CommentDelete
                index={index}
                id={comment_id || id}
                onDelete={onDelete}
              />
            ),
          ]}
        />
        <ArticleCommentContext
          comment_reply_id={comment_reply_id}
          comment_reply_author_username={comment_reply_author_username}
          comment_reply_author_display_name={comment_reply_author_display_name}
          story_slug={story_slug}
          story_title={story_title}
          story_author_display_name={story_author_display_name}
          story_author_username={story_author_username}
        />
        {!excludeTags && <CommentTags comment_text={comment_text} />}
        <ArticleTime index={index} {...metadata} />
        <ArticleFooterList
          list={ArticleCommentCounts({
            index,
            id: comment_id || id,
            ...metadata,
          })}
        />
      </ArticleFooter>
      <CommentRibbons index={index} id={comment_id || id} {...metadata} />
    </ArticleSectionMain>
  </ArticleContainer>
);

export default ArticleComment;
