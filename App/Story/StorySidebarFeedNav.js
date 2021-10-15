import React from "react";
import { isNumber, numberLabel } from "simpul";
import CommentForm from "../CommentForm";
import StorySidebarFeedNavZeroState from "./StorySidebarFeedNavZeroState";
import StoryCopyright from "../StoryCopyright";

function StorySidebarFeedNav({ data }) {
  const $stylePreset = "fixed";

  const keys = ["list", "sort"];

  const uls = ["UL_3_BlackBar", "UL_3_GrayItalic"];

  const linkSets = [
    ["comments", ["newest", "top"]],
    ["likes", ["newest", "alphabetical"]],
    ["copyright"],
  ];

  const linkCounts = [["count_comments"], ["count_likes"]];

  const linkLabels = linkSets.map((linkSet) =>
    linkSet.map(() => (link, linkSetIndex, linkIndex) => {
      const countKey =
        linkCounts[linkSetIndex] && linkCounts[linkSetIndex][linkIndex];
      return isNumber(data[countKey])
        ? numberLabel(data[countKey], link).full
        : link;
    })
  );

  const Content = [
    {
      FeedContentTop: (componentData) => (
        <CommentForm {...componentData} story_id={data.id} />
      ),
      ZeroState: (componentData) => (
        <StorySidebarFeedNavZeroState.Comments {...componentData} {...data} />
      ),
    },
    {
      ArticleProps: () => ({ svg: "like" }),
      ZeroState: () => <StorySidebarFeedNavZeroState.Likes {...data} />,
    },
    {
      Component: StoryCopyright,
    },
  ];

  return { $stylePreset, keys, uls, linkSets, linkLabels, Content };
}

export default StorySidebarFeedNav;

// const linkSVGs = [["comment"], ["like"], ["copyright"]];
//
// const linkLabels = linkSVGs.map((linkSVGs2) =>
//   linkSVGs2.map((linkSVG) => (link, linkSetIndex, linkIndex) => (
//     <ResponsiveLabel
//       svg={{ name: linkSVGs[linkSetIndex][linkIndex] }}
//       label={link}
//     />
//   ))
// );
