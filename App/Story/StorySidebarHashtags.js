import React from "react";
import PillTray from "../PillTray";

const StorySidebarHashtags = ({ index: storyIndex, hashtags }) =>
  hashtags ? (
    <PillTray
      items={hashtags}
      id={({ index: itemIndex }) =>
        [storyIndex, "hashtag", itemIndex].join("_")
      }
      tooltip={({ item }) => ({
        Template: "TooltipButtonHashtag",
        hashtag: item,
      })}
    />
  ) : null;

export default StorySidebarHashtags;
