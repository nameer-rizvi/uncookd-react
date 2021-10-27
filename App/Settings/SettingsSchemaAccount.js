import { name } from "../../../shared";
import SettingsAccountVerify from "../SettingsAccountVerify";
import SettingsAccountDelete from "../SettingsAccountDelete";
import { onSettingsFormSuccess } from "../../redux";

const SettingsSchemaAccount = {
  id: "account-settings",
  components: [
    {
      component: "H4_2",
      children: "autosave drafts",
    },
    {
      component: "FormFieldCheckbox",
      label:
        "Automatically save your in-progress draft everytime you've stopped typing for a second (and taken a breath - phew!).",
      name: "write_autosave",
    },
    {
      component: "H4_2",
      children: "allow public sharing",
    },
    {
      component: "FormFieldCheckbox",
      label: `Allow ${
        name.main
      } to share your stories on social media (twitter, reddit, etc.).`,
      name: "is_shareable",
    },
    {
      component: "H4_2",
      children: "account privacy",
    },
    {
      component: "FormFieldCheckbox",
      label:
        "Make your account private so that only your subscribers can view your profile & stories (as well as the list of likes and comments for your stories).",
      name: "is_private",
    },
    {
      component: "H4_2",
      children: "account verification",
    },
    {
      component: "Custom",
      Component: SettingsAccountVerify,
    },
    {
      component: "H4_2",
      children: "delete account",
    },
    {
      component: "Custom",
      Component: SettingsAccountDelete,
    },
    {
      component: "FormSubmitButton",
      label: "save",
      name: "submit_account_settings",
      title: "Submit account settings form.",
      onSubmit: {
        url: "/user/settings",
        onSuccess: onSettingsFormSuccess,
        message: {
          pending: "Updating account...",
          success: "Account updated.",
          error: "Failed to update account.",
        },
      },
    },
    {
      component: "FormPostStatus",
    },
  ],
};

export default SettingsSchemaAccount;
