import React from "react";
import ProfileFeedResponsiveLabels from "./ProfileFeedResponsiveLabels";
import ProfileFeedContent from "./ProfileFeedContent";
import Feed from "../Feed";

function ProfileFeed({
  data: { id, subscription, content_access, name, ...profileData },
  ...componentData
}) {
  const keys = ["list", "sort", "filter"];

  const uls = ["UL_3_WideUnderline", "UL_3_GrayItalic", "UL_3_RadioButton"];

  const isUser = subscription === "is_user";

  const linkSets = [
    ["posts", ["newest", "top", "alphabetical"], ["stories", "comments"]],
    ["bookmarks", ["newest", "top", "alphabetical"], ["stories", "comments"]],
    [
      "subscribers",
      ["newest", "alphabetical"],
      isUser && ["confirmed", "requests"],
    ],
    [
      "subscriptions",
      ["newest", "alphabetical"],
      ["hashtags", "users", isUser && "requests"],
    ],
  ];

  const $stackBreakpoints = [null, null, 1];

  const makeRequestURL = ({ list }) => "/user/list/" + list;

  componentData.params.profile_id = id;

  return (
    <Feed
      nav={{
        keys,
        uls,
        linkSets,
        linkLabels: ProfileFeedResponsiveLabels(profileData),
        Content: ProfileFeedContent,
        $stackBreakpoints,
      }}
      makeRequestURL={makeRequestURL}
      contentOwner={{ id, subscription, content_access, name }}
      {...{ ...componentData, name }}
    />
  );
}

export default ProfileFeed;
