import React from "react";
import ResponsiveLabel from "../ResponsiveLabel";

function ProfileFeedResponsiveLabels(profileData) {
  const linkCounts = [
    ["count_posts"],
    ["count_bookmarks"],
    ["count_subscribers"],
    ["count_subscriptions"],
  ];

  const linkSVGs = [["story"], ["bookmark"], ["users"], ["hashtag"]];

  const linkLabels = linkSVGs.map((linkSVGs2) =>
    linkSVGs2.map((linkSVG) => (link, linkSetIndex, linkIndex) => (
      <ResponsiveLabel
        count={profileData[linkCounts[linkSetIndex][linkIndex]]}
        svg={{ name: linkSVGs[linkSetIndex][linkIndex] }}
        label={link}
      />
    ))
  );

  return linkLabels;
}

export default ProfileFeedResponsiveLabels;
