import React from "react";
import ResponsiveLabel from "../ResponsiveLabel";
import SearchFeedNavZeroState from "./SearchFeedNavZeroState";

function SearchFeedNav(props) {
  const keys = ["list"];

  const includeURLParams = ["q"];

  const uls = ["UL_3_WideUnderline"];

  const linkSets = props.configs.map(({ list }) => [list]);

  const svgs = props.configs.map(({ list }) => list);

  const linkLabels = [
    (link, linkIndex) => (
      <ResponsiveLabel svg={{ name: svgs[linkIndex] }} label={link} plural />
    ),
  ];

  const ArticleProps = ({ params }) =>
    params.list === "comment"
      ? { excludeReply: true, excludeTags: true }
      : params.list === "story"
      ? { excludeCopyright: true, mainButton: { action: "read" } }
      : { excludeArticleSubscribeButton: true }; // For "user" || "hashtag"

  const ZeroState = (ZeroStateProps) => (
    <SearchFeedNavZeroState {...props} {...ZeroStateProps} />
  );

  const Content = props.configs.map(() => ({ ArticleProps, ZeroState }));

  return { keys, includeURLParams, uls, linkSets, linkLabels, Content };
}

export default SearchFeedNav;
