import SettingsSchemaProfile from "./SettingsSchemaProfile";
import SettingsSchemaAccount from "./SettingsSchemaAccount";
import SettingsSchemaNotifications from "./SettingsSchemaNotifications";
import SettingsSchemaChangePassword from "./SettingsSchemaChangePassword";
import SettingsSchemaFeedback from "./SettingsSchemaFeedback";

const SettingsConfigs = [
  {
    label: "profile",
    to: "/account/settings/profile",
    schema: SettingsSchemaProfile,
  },
  {
    label: "account",
    to: "/account/settings/account",
    schema: SettingsSchemaAccount,
  },
  {
    label: "notifications",
    to: "/account/settings/notifications",
    schema: SettingsSchemaNotifications,
  },
  {
    label: "change password",
    to: "/account/settings/change-password",
    schema: SettingsSchemaChangePassword,
  },
  {
    label: "feedback",
    to: "/account/settings/feedback",
    schema: SettingsSchemaFeedback,
  },
];

export default SettingsConfigs;
