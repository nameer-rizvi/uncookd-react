import React from "react";
import { topFilterConfigs } from "../../../shared";
import HomeFeedZeroState from "./HomeFeedZeroState";
import HomeFeedResponsiveLabels from "./HomeFeedResponsiveLabels";
import Feed from "../Feed";

// So as to not have clashing props with requestProps in GetComponent,
// under Feed, we destructure them out of the passed props here...

function HomeFeed({ error, pending, ...props }) {
  const keys = ["sort", "filter"];

  const uls = ["UL_3_WideUnderline", "UL_3_GrayItalic"];

  const topFilters = topFilterConfigs.map(({ label }) => label);

  const linkSets = [["trending", null], ["top", topFilters], ["newest", null]];

  if (props.isLoggedIn) {
    keys.push("filter2");
    uls.push("UL_3_RadioButton");
    linkSets.forEach((linkSet) =>
      linkSet.push([
        "all",
        "author subscriptions only",
        props.isDefault && "hashtag subscriptions only",
      ])
    );
  }

  const includeURLParams = ["hashtag"];

  const Content = linkSets.map(() => ({
    ArticleProps: () => ({ mainButton: { action: "read" } }),
    ZeroState: HomeFeedZeroState,
  }));

  const $stackBreakpoints = [null, null, 5];

  // Setting params with defaults here, as otherwise, it'll double-request.

  return (
    <Feed
      {...props}
      nav={{
        keys,
        uls,
        linkSets,
        linkLabels: HomeFeedResponsiveLabels(),
        includeURLParams,
        Content,
        $stackBreakpoints,
      }}
      requestURL="/home/list"
      params={{
        list: "story",
        sort: "trending",
        filter2: "all",
        ...props.params,
      }}
    />
  );
}

export default HomeFeed;
