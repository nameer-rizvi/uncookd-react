import React from "react";
import { objectKeyGroup, numberLabel } from "simpul";
import { Button } from "../Element";

function ArticleCommentCounts({ index, id, ...metadata }) {
  const { keysWithoutId, extractedWithoutId } = objectKeyGroup({
    keyStartsWith: "count_",
    object: metadata,
  });

  return keysWithoutId.map((key) => (
    <Button
      key={key}
      name={index + "_" + key}
      title={`See comment ${key}.`}
      to={`/comment/${id}/${key}`}
      children={numberLabel(extractedWithoutId[key], key).full}
    />
  ));
}

export default ArticleCommentCounts;
