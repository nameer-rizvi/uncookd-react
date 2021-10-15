import React, { Fragment } from "react";
import styled from "styled-components";
import { Button, SVG } from "../Element";
import { ArticleHeading, ArticleP, ArticleHeader } from "../Article";
import { label } from "../../../shared";
import { snakeCase, sentenceCase } from "change-case";

const StyledButton = styled(Button)`
  width: 100%;
  flex-direction: column;
  align-items: baseline;
`;

function ArticleStoryHeader({
  author_content_access,
  title,
  index,
  mainButton,
  author_username,
  author_display_name,
  id,
  slug,
  ...descriptions
}) {
  const StoryHeaderLockSVG =
    author_content_access === false ? (
      <SVG name="lock" title="Story is private." />
    ) : null;

  const StoryHeaderTitle = title;

  const description = label.description(descriptions) || null;

  const StoryHeaderDescription = description ? (
    <ArticleP $marginTop>{description}</ArticleP>
  ) : null;

  const StoryHeader = (
    <Fragment>
      <ArticleHeading>
        {StoryHeaderLockSVG}
        {StoryHeaderTitle}
      </ArticleHeading>
      {StoryHeaderDescription}
    </Fragment>
  );

  if (mainButton) {
    const ButtonProps = {};

    ButtonProps.name = `${index}_${snakeCase(mainButton.action)}`;

    ButtonProps.title = `${sentenceCase(mainButton.action)} "${title}"`;

    const author = label.author({ author_username, author_display_name });

    ButtonProps.title += author ? ` ${author}.` : ".";

    if (mainButton.onClick) {
      ButtonProps.onClick = (e) => mainButton.onClick({ e, id, slug });
    } else if (slug) {
      ButtonProps.to = "/story/" + slug;
    } else console.warn("Missing 'onClick'/'slug'.");

    ButtonProps.$hoverUnderline = true;

    ButtonProps.children = StoryHeader;

    return (
      <ArticleHeader>
        <StyledButton {...ButtonProps} />
      </ArticleHeader>
    );
  } else return <ArticleHeader>{StoryHeader}</ArticleHeader>;
}

export default ArticleStoryHeader;
