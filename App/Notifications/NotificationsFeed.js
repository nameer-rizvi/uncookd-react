import React from "react";
import { notifications } from "../../../shared";
import Feed from "../Feed";
import NotificationsFeedContentTop from "./NotificationsFeedContentTop";

function NotificationsFeed({ list }) {
  if (!list) list = notifications.account[0].key;

  const ZeroState = () =>
    notifications.account.find(({ key }) => key === list).label_zero_state ||
    null;

  return (
    <Feed
      excludeContainerPadding
      requestURL="/user/account/notifications/list"
      params={{ list }}
      Content={{ FeedContentTop: NotificationsFeedContentTop, ZeroState }}
    />
  );
}

export default NotificationsFeed;
