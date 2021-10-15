import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { storyLength } from "../../../shared";
import { H4Title, GrayBox, BoxAfter, Button } from "../Element";
import ArticleStory from "../ArticleStory";
import StoryPage from "../StoryPage";

function WriteSchemaPreview({ display_name, values, page, disabled }) {
  const { username } = useSelector((state) => state.user);

  const author = {
    author_username: username,
    author_display_name: display_name,
  };

  const length = storyLength({ rich_text: values.rich_text_story });

  const ArticleStoryProps = {
    ...values,
    ...author,
    index: "preview_article",
    hashtags: values.hashtag_list,
    published_at: new Date(),
    count_words: length.words,
    count_chars: length.chars,
    count_views: 0,
    count_likes: 0,
    count_comments: 0,
    isPreview: true,
  };

  const Sidebar = (
    <Fragment>
      <H4Title>article preview:</H4Title>
      <GrayBox style={{ marginBottom: 40 }}>
        <ArticleStory {...ArticleStoryProps} />
      </GrayBox>
      <H4Title>page preview:</H4Title>
      <GrayBox>
        <StoryPage {...author} {...values} excludeTooltip />
      </GrayBox>
      <BoxAfter />
    </Fragment>
  );

  const PreviewButtonProps = {
    id: "preview",
    name: "preview_article_page",
    title: "Preview article & page.",
    children: "preview article & page",
    onClick: () => page.setSidebar(Sidebar),
    $underline: true,
    disabled,
  };

  return <Button {...PreviewButtonProps} />;
}

export default WriteSchemaPreview;
