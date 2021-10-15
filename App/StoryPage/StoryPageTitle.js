import React from "react";
import { StoryPageHeading } from "./StoryPageStyled";
import { SVG, Button } from "../Element";
import { label } from "../../../shared";

function StoryPageTitle({ author_content_access, title, slug }) {
  const TitleContent = (
    <StoryPageHeading>
      {author_content_access === false ? <SVG name="lock" /> : null}
      {label.title(title)}
    </StoryPageHeading>
  );

  const TitleButtonProps = {
    id: "story-page-title",
    title: "See story copyright.",
    to: `/story/${slug}/copyright`,
    children: TitleContent,
    $hoverUnderline: true,
    initialStyle: true,
  };

  return slug ? <Button {...TitleButtonProps} /> : TitleContent;
}

export default StoryPageTitle;
