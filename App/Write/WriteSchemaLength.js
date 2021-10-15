import React from "react";
import { storyLength, storyCategories } from "../../../shared";
import { numberLabel } from "simpul";
import { FormFieldInput } from "../Form";

function WriteSchemaLength({ values, ...rest }) {
  const length = storyLength({ rich_text: values.rich_text_story });

  const { maxChar: twitteratureMaxChar } = storyCategories().find(
    (storyCategory) => storyCategory.name === "twitterature"
  );

  rest.value = length.chars
    ? `${length.category} (${
        length.chars > twitteratureMaxChar
          ? numberLabel(length.words, "words", "showAlt").full
          : numberLabel(length.chars, "characters", "showAlt").full
      })`
    : "0";

  return <FormFieldInput {...rest} />;
}

export default WriteSchemaLength;
