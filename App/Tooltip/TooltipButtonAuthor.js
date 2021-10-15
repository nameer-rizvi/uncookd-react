import React from "react";
import { objectKeyGroup } from "simpul";
import { label } from "../../../shared";
import TooltipButton from "./TooltipButton";

function TooltipButtonAuthor({
  className,
  plainTextOnly,
  excludeTooltip,
  excludeTooltipSubscribeButton,
  makeLabel,
  ...metadata
}) {
  if (!className) console.warn("Missing 'className'.");

  const { extractedWithoutId: author } = objectKeyGroup({
    keyStartsWith: "author_",
    object: metadata,
  });

  if (author.id) {
    author.user_id = author.id;
    delete author.id;
  }

  const authorLabel = label.author(metadata);

  return authorLabel ? (
    <TooltipButton
      Template="TooltipButtonUser"
      ButtonProps={{ className }}
      plainTextOnly={plainTextOnly}
      excludeTooltip={excludeTooltip}
      excludeSubscribeButton={excludeTooltipSubscribeButton}
      {...author}
    >
      {makeLabel ? makeLabel(authorLabel.split("by")[1].trim()) : authorLabel}
    </TooltipButton>
  ) : null;
}

export default TooltipButtonAuthor;
