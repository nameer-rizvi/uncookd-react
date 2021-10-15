import React from "react";
import { isNumber, numberLabel } from "simpul";
import { label } from "../../../shared";
import CommentForm from "../CommentForm";
import { P } from "../Element";

function CommentFeedNav({ data, location }) {
  const $stylePreset = "fixed";

  const keys = ["list", "sort"];

  const uls = ["UL_3_BlackBar", "UL_3_GrayItalic"];

  const linkSets = [
    ["replies", ["newest", "top"]],
    ["likes", ["newest", "alphabetical"]],
  ];

  const linkCounts = [["count_replies"], ["count_likes"]];

  const linkLabels = linkSets.map((linkSet) =>
    linkSet.map(() => (link, linkSetIndex, linkIndex) => {
      const countKey =
        linkCounts[linkSetIndex] && linkCounts[linkSetIndex][linkIndex];
      return isNumber(data[countKey])
        ? numberLabel(data[countKey], link).full
        : link;
    })
  );

  const authorName = label.author({
    display_name: data.author_display_name,
    username: data.author_username,
  });

  const Content = [
    {
      FeedContentTop: (componentData) => (
        <CommentForm
          {...componentData}
          type="reply"
          initialToggleState={location.hash === "#reply"}
          story_id={data.story_id}
          comment_reply_id={data.id}
          comment_level={data.comment_level}
        />
      ),
      ZeroState: ({ params }) => (
        <P>
          Comment {authorName} does not currently have any{" "}
          {params.sort === "top" ? " top " : ""} replies.
        </P>
      ),
    },
    {
      ZeroState: () => (
        <P>Comment {authorName} does not currently have any likes.</P>
      ),
    },
  ];

  return { $stylePreset, keys, uls, linkSets, linkLabels, Content };
}

export default CommentFeedNav;
