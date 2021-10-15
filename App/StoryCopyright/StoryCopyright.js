import React from "react";
import StoryCopyrightStyled from "./StoryCopyrightStyled";
import StoryCopyrightMain from "./StoryCopyrightMain";
import StoryCopyrightCitations from "./StoryCopyrightCitations";
import StoryCopyrightMiscellaneous from "./StoryCopyrightMiscellaneous";
import StoryCopyrightNotice from "./StoryCopyrightNotice";

const StoryCopyright = ({
  data: {
    published_at,
    author_username,
    author_display_name,
    author_subscription,
    title,
    count_chars,
    count_words,
    is_nsfw,
  },
}) => (
  <StoryCopyrightStyled id="story-copyright">
    <StoryCopyrightMain
      published_at={published_at}
      author_username={author_username}
      author_display_name={author_display_name}
      title={title}
    />
    <StoryCopyrightCitations
      author_username={author_username}
      author_display_name={author_display_name}
      title={title}
      published_at={published_at}
    />
    <StoryCopyrightMiscellaneous
      published_at={published_at}
      count_chars={count_chars}
      count_words={count_words}
      is_nsfw={is_nsfw}
    />
    <StoryCopyrightNotice author_subscription={author_subscription} />
  </StoryCopyrightStyled>
);

export default StoryCopyright;
