import React from "react";
import { objectKeyGroup, numberLabel } from "simpul";
import { label } from "../../../shared";
import { Button } from "../Element";

function ArticleUserCounts({ username, display_name, ...metadata }) {
  const { keysWithoutId, extractedWithoutId } = objectKeyGroup({
    keyStartsWith: "count_",
    object: metadata,
  });

  return keysWithoutId.map((key) => {
    const userLabel = label.user({ username, display_name });

    const title = `See ${key} for ${userLabel}.`;

    const to = `/user/${username}/${key}`;

    return (
      <Button title={title} to={to}>
        {numberLabel(extractedWithoutId[key], key).full}
      </Button>
    );
  });
}

export default ArticleUserCounts;
