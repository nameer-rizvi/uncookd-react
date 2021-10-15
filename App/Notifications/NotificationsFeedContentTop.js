import React from "react";
import { notifications as configs } from "../../../shared";
import { useDispatch } from "react-redux";
import { modalClose } from "../../redux";
import { support } from "simpul";
import { ButtonResolver } from "../Element";

function NotificationsFeedContentTop({ params, push_enabled }) {
  const config = configs.push.find((n) => n.key === params.list);

  const dispatch = useDispatch();

  if (config) {
    const closeModal = () => dispatch(modalClose());

    const status =
      support.NotificationPermission("granted") && push_enabled
        ? "enabled"
        : "disabled";

    return (
      <ButtonResolver
        id="notifications-settings-link"
        resolve="settings_notifications"
        onClick={closeModal}
      >
        Push notifications for {config.label_activity} have been {status} on
        this device.
      </ButtonResolver>
    );
  } else return null;
}

export default NotificationsFeedContentTop;
