import React from "react";
import { FlexBox, SVG } from "../Element";
import { RibbonConfigs, Ribbon } from "../Ribbon";

const ArticleStoryRibbons = ({
  isDraft,
  isPreview,
  id,
  index: storyIndex,
  author_content_access,
  ...metadata
}) =>
  !isDraft ? (
    <FlexBox className="article-ribbons">
      {RibbonConfigs.map((ribbon, ribbonIndex) =>
        isPreview ? (
          <SVG key={ribbonIndex} name={ribbon.name} disabled />
        ) : (
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
        )
      )}
    </FlexBox>
  ) : null;

export default ArticleStoryRibbons;
