const SettingsSchemaChangePassword = {
  id: "change-password-settings",
  components: [
    // {
    //   component: "H4_2",
    //   children: "safely change your password",
    // },
    {
      component: "FormFieldInput",
      label: "current password:",
      type: "password",
      name: "password",
      autoComplete: "current-password",
      required: true,
    },
    {
      component: "FormFieldInput",
      label: "new password:",
      type: "password",
      name: "password1",
      autoComplete: "new-password",
      required: true,
    },
    {
      component: "FormFieldInput",
      label: "confirm new password:",
      type: "password",
      name: "password2",
      autoComplete: "new-password",
      required: true,
    },
    {
      component: "FormSubmitButton",
      label: "save",
      name: "submit_change_password_settings",
      title: "Submit change password settings form.",
      onSubmit: {
        resetForm: true,
        url: "/user/account/changepassword",
        message: {
          pending: "Changing password...",
          success: "Password changed.",
          error: "Failed to change password.",
        },
      },
    },
    {
      component: "FormPostStatus",
    },
  ],
};

export default SettingsSchemaChangePassword;
