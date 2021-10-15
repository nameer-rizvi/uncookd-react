import { tokenExpiration } from "../../../shared";

const AccountForgotPasswordSchema = {
  id: "forgot-password",
  components: [
    {
      component: "FormFieldInput",
      type: "email",
      name: "email",
      autoComplete: "email",
      required: true,
    },
    {
      component: "FormSubmitButton",
      name: "submit_forgot_password",
      title: "Submit forgot password form.",
      onSubmit: {
        url: "/user/account/forgotpassword",
        allowAnonymousRequest: true,
        resetForm: true,
        message: {
          pending: "Sending password reset link...",
          success: [
            "Password reset link sent. Link will be valid for",
            tokenExpiration.resetpassword.label + ".",
            "If you haven't received an email within this time, please check your spam/junk folder. If it's not there, you can come back here and try again. See you in a bit!",
          ].join(" "),
        },
      },
    },
    {
      component: "FormButtonResolver",
      resolve: "login",
      children: "Remember password?",
      $underline: true,
    },
    {
      component: "FormPostStatus",
    },
  ],
};

export default AccountForgotPasswordSchema;
