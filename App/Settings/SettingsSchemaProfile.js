import { socialMedia } from "../../../shared";
import { onSettingsFormSuccess } from "../../redux";

const SettingsSchemaProfile = {
  id: "profile-settings",
  components: [
    {
      component: "FormFieldInput",
      label: "display name:",
      name: "display_name",
      autoComplete: "name",
    },
    {
      component: "FormFieldInput",
      label: "website:",
      name: "website",
      autoComplete: "url",
    },
    {
      component: "FormFieldTextarea",
      label: "bio:",
      name: "bio",
      rows: 3,
    },
    {
      component: "H4_2",
      children: "show email",
    },
    {
      component: "FormFieldCheckbox",
      label:
        "Show an email link on your profile? Only your subscribers will be able to see it... and until we get our discord chat server going this might be the only way for someone to directly reach out to you. #penpals #bigfan #bestregards",
      name: "show_email",
    },
    {
      component: "FormFieldFieldset",
      legend: "social media handles",
      components: socialMedia.configs.map((socialMediaConfig, index) => ({
        component: "FormFieldInput",
        name: socialMediaConfig.machine_name,
        label: socialMediaConfig.label + ":",
        autoComplete: "username",
      })),
    },
    {
      component: "FormSubmitButton",
      label: "save",
      name: "submit_profile_settings",
      title: "Submit profile settings form.",
      onSubmit: {
        url: "/user/settings",
        onSuccess: onSettingsFormSuccess,
        message: {
          pending: "Updating profile...",
          success: "Profile updated.",
          error: "Failed to update profile.",
        },
      },
    },
    {
      component: "FormPostStatus",
    },
  ],
};

export default SettingsSchemaProfile;
