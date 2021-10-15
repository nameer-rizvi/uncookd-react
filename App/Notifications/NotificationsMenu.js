import React from "react";
import { Select } from "../Form";
import { notifications } from "../../../shared";

const NotificationsMenu = ({ list, updateList, count_notifications_new }) => (
  <Select
    containerId="notifications-menu-container"
    name="notifications_menu"
    value={list}
    onChange={({ target }) => updateList(target.value)}
    options={notifications.account.map(
      ({ key, count_alias, label_activity }) => ({
        value: key,
        label:
          count_notifications_new[count_alias] > 0
            ? `${label_activity} (${count_notifications_new[count_alias]})`
            : label_activity,
      })
    )}
  />
);

export default NotificationsMenu;
