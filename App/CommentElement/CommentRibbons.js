import React from "react";
import { FlexBox } from "../Element";
import { RibbonConfigs, Ribbon } from "../Ribbon";

const CommentRibbons = ({ id, index: commentIndex, ...metadata }) => (
  <FlexBox className="article-ribbons">
    {RibbonConfigs.map((ribbon, ribbonIndex) => (
      <Ribbon
        key={ribbonIndex}
        content_type="comment"
        content_id={id}
        content_index={commentIndex}
        ribbon_name={ribbon.name}
        ribbon_key={ribbon.key}
        ribbon_is_selected={metadata[ribbon.key]}
        ribbon_style={ribbon.style}
      />
    ))}
  </FlexBox>
);

export default CommentRibbons;
