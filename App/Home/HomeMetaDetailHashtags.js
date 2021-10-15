import React from "react";
import { hashtagConfig } from "../../../shared";
import PillTray from "../PillTray";

function HomeMetaDetailHashtags({ hashtag_recommendations, pending, value }) {
  const placeholder = "...";

  const items = hashtag_recommendations
    ? hashtag_recommendations
    : pending
    ? [placeholder, placeholder, placeholder, placeholder]
    : [];

  if (!items.includes(hashtagConfig.default))
    items.unshift(hashtagConfig.default);

  if (value && !items.includes(value)) items.push(value);

  const makeId = ({ index: itemIndex }) =>
    ["hashtag", "recommendation", itemIndex].join("_");

  const makeSelected = ({ item }) => item === value;

  return (
    <PillTray
      className="home-meta-detail-hashtag-recommendations"
      id={makeId}
      items={items}
      selected={makeSelected}
      tooltip={({ item }) => ({
        Template: "TooltipButtonHashtag",
        hashtag: item,
        excludeTooltip: hashtagConfig.default === item || item === value,
      })}
    />
  );
}

export default HomeMetaDetailHashtags;
