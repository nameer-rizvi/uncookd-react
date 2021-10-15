// --flow-serviceWorker-notifications-5

import { support } from "simpul";
import { requestNotificationsPermission } from "../../utils";

const SettingsNotificationsPermissionConfig = () =>
  [
    {
      condition: !support.Notification(),
      status: "not supported",
      detail: "This browser does not support our push notification service.",
      button: { disabled: true },
    },
    {
      condition: support.NotificationPermission("granted"),
      status: "allowed",
      detail: "You have allowed this browser to receive push notifications.",
      button: { disabled: true },
    },
    {
      condition: support.NotificationPermission("denied"),
      status: "denied",
      detail: "You have denied this browser to receive push notifications.",
      button: { disabled: true },
    },
    {
      condition: support.NotificationPermission("default"),
      status: "not set",
      detail:
        "You have not set this browser to allow or deny push notifications.",
      button: {
        onClick: () => requestNotificationsPermission("userIsLoggedIn"),
      },
    },
    {
      condition: true,
      status: "",
      detail: "",
      button: {},
    },
  ].find(({ condition }) => condition);

export default SettingsNotificationsPermissionConfig;
