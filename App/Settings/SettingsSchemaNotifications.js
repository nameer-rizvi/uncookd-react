// --flow-serviceWorker-notifications-3

import SettingsNotificationsPermission from "../SettingsNotificationsPermission";
import { notifications } from "../../../shared";
import { support } from "simpul";
import { onSettingsFormSuccess } from "../../redux";

const SettingsSchemaNotifications = {
  id: "notifications-settings",
  components: [
    {
      component: "Custom",
      Component: SettingsNotificationsPermission,
    },
    {
      component: "FormFieldFieldset",
      legend: "send me a push notification when...",
      components: notifications.account.map(({ key, label_detail }) => ({
        component: "FormFieldCheckbox",
        name: key,
        label: label_detail,
        disabled: !support.NotificationPermission(),
      })),
    },
    {
      component: "FormSubmitButton",
      label: "save",
      name: "submit_notification_settings",
      title: "Submit notifications settings form.",
      onSubmit: {
        url: "/user/settings",
        onSuccess: onSettingsFormSuccess,
        message: {
          pending: "Updating notification settings...",
          success: "Notification settings updated.",
          error: "Failed to update notification settings.",
        },
      },
    },
    {
      component: "FormPostStatus",
    },
  ],
};

export default SettingsSchemaNotifications;
