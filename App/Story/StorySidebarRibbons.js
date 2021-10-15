import React from "react";
import { FlexBox } from "../Element";
import { RibbonConfigs, Ribbon } from "../Ribbon";

const StorySidebarRibbons = ({
  id,
  index: storyIndex,
  author_content_access,
  ...metadata
}) => (
  <FlexBox className="article-ribbons">
    {RibbonConfigs.map((ribbon, ribbonIndex) => (
      <Ribbon
        key={ribbonIndex}
        content_type="story"
        content_id={id}
        content_index={storyIndex}
        ribbon_name={ribbon.name}
        ribbon_key={ribbon.key}
        ribbon_is_selected={metadata[ribbon.key]}
        ribbon_style={ribbon.style}
        author_content_access={author_content_access}
      />
    ))}
  </FlexBox>
);

export default StorySidebarRibbons;
