const AccountResetPasswordSchema = {
  id: "reset-password",
  components: [
    {
      component: "FormFieldInput",
      label: "NEW PASSWORD",
      type: "password",
      name: "password1",
      autoComplete: "new-password",
      required: true,
    },
    {
      component: "FormFieldInput",
      label: "CONFIRM NEW PASSWORD",
      type: "password",
      name: "password2",
      autoComplete: "new-password",
      required: true,
    },
    {
      component: "FormSubmitButton",
      name: "submit_reset_password",
      title: "Submit reset password form.",
      onSubmit: {
        resetForm: true,
        allowAnonymousRequest: true,
        url: "/user/account/resetpassword",
        message: {
          pending: "Resetting password...",
          success:
            "Password has been reset. You can now login with your new password.",
          error: "Failed to reset password.",
        },
      },
    },
    {
      component: "FormButtonResolver",
      resolve: "forgot_password",
      children: "Click here to request a new reset link.",
      $underline: true,
    },
    {
      component: "FormPostStatus",
    },
  ],
};

export default AccountResetPasswordSchema;
