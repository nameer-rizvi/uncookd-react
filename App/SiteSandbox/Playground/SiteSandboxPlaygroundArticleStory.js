import React from "react";
import ArticleStory from "../../ArticleStory";

const SiteSandboxPlaygroundArticleStory = () => (
  <div>
    <ArticleStory
      content_type="story_article"
      index="story_0"
      // id={0}
      story_id={999}
      slug="The-Great-Rize-of-Znakeplante--by--asd"
      title="Rize of The Great Znakeplante"
      description="This is the story of the GREATEST snake-plant of all, Znakeplante!"
      // rich_text_story_substring="This is the story of the GREATEST snake-plant of all, Znakeplante"
      // rich_text_story="This is the story of the GREATEST snake-plant of all, Znakeplante"
      author_id={50}
      author_username="orangecuckoo"
      author_display_name="Sime Saz"
      author_subscription="is_user"
      author_content_access={false}
      // excludeAuthorTooltip
      excludeAuthorTooltipSubscribeButton
      mainButton={{ action: "read" }}
      hashtags={["amazingReads", "goats", "goatcheese"]}
      // excludeHashtagTooltip
      // excludeHashtagTooltipSubscribeButton
      // onDelete={console.log}
      // isDraft
      isPreview
      is_nsfw
      created_at={new Date()}
      // updated_at={new Date()}
      bookmarked_at={new Date()}
      count_words={1234}
      count_chars={1234}
      count_views={1234}
      count_likes={1234}
      count_comments={1234}
      is_liked={1}
      is_bookmarked={1}
    />
  </div>
);

export default SiteSandboxPlaygroundArticleStory;
