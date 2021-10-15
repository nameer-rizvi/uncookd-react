import React from "react";
import { label } from "../../../shared";
import { P } from "../Element";

const makeStoryLabel = ({ title, author_username, author_display_name }) =>
  `"${label.title(title)}" ${label.author({
    author_username,
    author_display_name,
  })}`;

const StorySidebarFeedNavZeroState = {
  Comments: (data) => (
    <P>
      {makeStoryLabel(data)} does not currently have any{" "}
      {data.params.sort === "top" ? " top " : ""}comments.
    </P>
  ),
  Likes: (data) => (
    <P>{makeStoryLabel(data)} does not currently have any likes.</P>
  ),
};

export default StorySidebarFeedNavZeroState;
