import React, { Fragment } from "react";
import { H4Title, P, Dfn } from "../Element";
import { fullDate } from "../../utils";
import { capitalize, numberLabel } from "simpul";
import { storyCategory } from "../../../shared";

const StoryCopyrightMiscellaneous = ({
  published_at,
  count_chars,
  count_words,
  is_nsfw,
}) => (
  <Fragment>
    <H4Title>Miscellaneous</H4Title>
    <P>Published {fullDate(published_at)}.</P>
    <P>{capitalize(storyCategory(count_chars, count_words))}.</P>
    <P>{numberLabel(count_words, "words", "showAlt").full}.</P>
    <P>{numberLabel(count_chars, "characters", "showAlt").full}.</P>
    {is_nsfw ? (
      <P>
        <Dfn def="nsfw">NSFW ("not safe for work").</Dfn>
      </P>
    ) : null}
  </Fragment>
);

export default StoryCopyrightMiscellaneous;
