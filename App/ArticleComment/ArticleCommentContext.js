import React from "react";
import { label as makeLabel } from "../../../shared";
import { Span, Button } from "../Element";

function ArticleCommentContext({
  comment_reply_id,
  comment_reply_author_username,
  comment_reply_author_display_name,
  story_slug,
  story_title,
  story_author_display_name,
  story_author_username,
}) {
  const label = {
    comment: makeLabel.author({
      display_name: comment_reply_author_display_name,
      username: comment_reply_author_username,
    }),
    story: [
      `"${makeLabel.title(story_title)}"`,
      makeLabel.author({
        display_name: story_author_display_name,
        username: story_author_username,
      }),
    ].join(" "),
  };

  const ButtonProps =
    comment_reply_id && label.comment
      ? {
          title: "See parent comment " + label.comment + ".",
          to: "/comment/" + comment_reply_id,
          children: "see context: parent comment, " + label.comment,
        }
      : story_slug && label.story
      ? {
          title: "See comments for " + label.story + ".",
          to: "/story/" + story_slug + "/comments",
          children: "see context: story, " + label.story,
        }
      : null;

  return ButtonProps ? (
    <Span>
      <Button initialStyle {...ButtonProps} />
    </Span>
  ) : null;
}

export default ArticleCommentContext;
