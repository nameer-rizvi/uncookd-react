import React from "react";
import { useToggle } from "../../hooks";
import { isNumber, numberLabel } from "simpul";
import { storyLength } from "../../../shared";
import { Button } from "../Element";

function ArticleStoryLength({ count_words, count_chars, index }) {
  const toggle = useToggle();

  if (isNumber(count_words) && isNumber(count_chars)) {
    const length = storyLength({ count_words, count_chars });

    const labelWords = numberLabel(length.words, "words").full;

    const labelChars = numberLabel(length.chars, "characters").full;

    const ButtonProps = toggle.state
      ? {
          title: `Story length: ${labelWords}, ${labelChars}.`,
          name: `${index}_length`,
          children: `${labelWords}, ${labelChars}`,
        }
      : {
          title: `Story category: ${length.category}.`,
          name: `${index}_category`,
          children: length.category,
        };

    return <Button onClick={toggle.change} {...ButtonProps} />;
  } else return null;
}

export default ArticleStoryLength;
