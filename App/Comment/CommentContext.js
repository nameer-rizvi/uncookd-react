import React from "react";
import { label } from "../../../shared";
import { FlexBox, Span, Button } from "../Element";
import { ArticleTime } from "../Article";

function CommentContext({
  story_slug,
  story_title,
  story_author_username,
  story_author_display_name,
  comment_reply_id,
  comment_reply_author_username,
  comment_reply_author_display_name,
  ...rest
}) {
  const story = {
    title: label.title(story_title),
    author: label.author({
      username: story_author_username,
      display_name: story_author_display_name,
    }),
  };

  const comment_reply_author = label.author({
    username: comment_reply_author_username,
    display_name: comment_reply_author_display_name,
  });

  const ButtonProps = story_slug
    ? {
        to: `/story/${story_slug}/comments`,
        title: `See comments for "${story.title}" ${story.author}.`,
        children: `"${story.title}," a story ${story.author}.`,
      }
    : comment_reply_id
    ? {
        to: `/comment/${comment_reply_id}`,
        title: `See parent comment ${comment_reply_author}.`,
        children: `reply to a comment ${comment_reply_author}.`,
      }
    : null;

  return (
    <FlexBox className="comment-context">
      <ArticleTime {...rest} />
      {ButtonProps ? <Span id="side-padding" children="in" /> : null}
      {ButtonProps ? <Button {...ButtonProps} /> : null}
    </FlexBox>
  );
}

export default CommentContext;
