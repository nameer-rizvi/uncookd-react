import React from "react";
import PillTray from "../PillTray";
import { label } from "../../../shared";

function ArticleStoryHashtags({
  hashtags = [],
  index: storyIndex,
  isPreview,
  excludeTooltip,
  excludeTooltipSubscribeButton,
}) {
  const makeId = ({ index: itemIndex }) =>
    [storyIndex, "hashtag", itemIndex].join("_");

  return isPreview ? (
    <PillTray
      id={makeId}
      items={hashtags}
      label={({ item }) => label.hashtag(item)}
    />
  ) : (
    <PillTray
      id={makeId}
      items={hashtags}
      tooltip={({ item }) => ({
        Template: "TooltipButtonHashtag",
        hashtag: item,
        excludeSubscribeButton: excludeTooltipSubscribeButton,
        excludeTooltip,
      })}
    />
  );
}

export default ArticleStoryHashtags;
