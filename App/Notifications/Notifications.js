import React from "react";
import useNotificationsState from "./NotificationsState";
import { isObjectValid } from "simpul";
import NotificationsStyled from "./NotificationsStyled";
import NotificationsDate from "./NotificationsDate";
import NotificationsNews from "./NotificationsNews";
import NotificationsMenu from "./NotificationsMenu";
import NotificationsFeed from "./NotificationsFeed";

function Notifications(props) {
  const {
    count_notifications_new,
    count_new_total,
    updateList,
    list,
  } = useNotificationsState(props);

  return isObjectValid(count_notifications_new) ? (
    <NotificationsStyled>
      <NotificationsDate count_new_total={count_new_total} />
      <NotificationsNews
        count_notifications_new={count_notifications_new}
        updateList={updateList}
      />
      <NotificationsMenu
        count_notifications_new={count_notifications_new}
        list={list}
        updateList={updateList}
      />
      <NotificationsFeed list={list} />
    </NotificationsStyled>
  ) : null;
}

export default Notifications;
