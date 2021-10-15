import React from "react";
import { Button, SpanBracket } from "../Element";

const FeedContentNextButton = (props) => (
  <Button
    name="feed_get_next"
    title="Load more items."
    $fontSize="m"
    $hoverUnderline
    {...props}
  >
    <SpanBracket>{props.disabled ? "loading..." : "load more?"}</SpanBracket>
  </Button>
);

export default FeedContentNextButton;
