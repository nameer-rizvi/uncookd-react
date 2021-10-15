import React from "react";
import { objectKeyGroup, numberLabel } from "simpul";
import { label } from "../../../shared";
import { URLQuery } from "../../utils";
import { Button } from "../Element";

function ArticleHashtagCounts({ hashtag, ...metadata }) {
  const { keysWithoutId, extractedWithoutId } = objectKeyGroup({
    keyStartsWith: "count_",
    object: metadata,
  });

  const ButtonProps = {
    title: `See ${label.hashtag(hashtag)} stories.`,
    to: URLQuery.home(hashtag),
  };

  return keysWithoutId.map((key) => (
    <Button {...ButtonProps}>
      {numberLabel(extractedWithoutId[key], key).full}
    </Button>
  ));
}

export default ArticleHashtagCounts;
