import React from "react";
import Feed from "../Feed";
import StorySidebarFeedNav from "./StorySidebarFeedNav";

function StorySidebarFeed(props) {
  const nav = StorySidebarFeedNav(props);

  const makeRequestURL = ({ list }) => "/story/list/" + list;

  const contentOwner = {
    id: props.author_id,
    subscription: props.author_subscription,
    content_access: props.author_content_access,
    username: props.author_username,
    display_name: props.author_display_name,
  };

  props.params.story_id = props.data.id;

  const FeedProps = { nav, makeRequestURL, contentOwner, ...props };

  return <Feed excludeContainerPadding {...FeedProps} />;
}

export default StorySidebarFeed;
