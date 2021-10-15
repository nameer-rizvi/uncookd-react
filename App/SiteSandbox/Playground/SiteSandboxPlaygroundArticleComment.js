import React from "react";
import ArticleComment from "../../ArticleComment";

const SiteSandboxPlaygroundArticleComment = () => (
  <div>
    <ArticleComment
      index="comment_0"
      comment_id={10}
      comment_text="This is a comment I'm writing to @nameer @whowhattt."
      author_id={116}
      author_username="nameer"
      author_display_name="Nameer Rizvi"
      author_subscription="is_user"
      author_content_access={true}
      // comment_reply_id={20}
      // comment_reply_author_username="oppo"
      // comment_reply_author_display_name="Mr OPPO"
      story_slug="some-story-slug"
      story_title="A Genuine Pig"
      story_author_display_name="oppo"
      story_author_username="Mr OPPO"
      posted_at={new Date()}
      count_likes={1000}
      count_replies={1000}
      is_liked={0}
      is_bookmarked={1}
      // excludeTooltip
      // excludeTooltipSubscribeButton
      // excludeArticleSubscribeButton
    />
  </div>
);

export default SiteSandboxPlaygroundArticleComment;
