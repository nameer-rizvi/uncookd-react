import React from "react";
import AccountAuthTemplate from "./AccountAuthTemplate";
import { authFormRedirect } from "../../redux";

const AccountAuthLogin = (props) => (
  <AccountAuthTemplate
    title="LOG IN FORM"
    schema={{
      id: "login",
      components: [
        {
          component: "FormFieldInput",
          name: "username",
          autoComplete: "username",
          required: true,
        },
        {
          component: "FormFieldInput",
          type: "password",
          name: "password",
          autoComplete: "current-password",
          required: true,
        },
        {
          component: "FormSubmitButton",
          name: "submit_login",
          title: "Submit log in form.",
          onSubmit: {
            allowAnonymousRequest: true,
            url: "/user/account/login",
            onSuccess: authFormRedirect,
            message: {
              pending: "Logging in...",
              success: "Logged in!",
              error: "Failed to log in.",
            },
          },
        },
        {
          component: "FormButtonResolver",
          resolve: "signup",
          children: "Or click here to sign up.",
          $underline: true,
        },
        {
          component: "FormButtonResolver",
          resolve: "forgot_password",
          children: "Forgot password?",
          $underline: true,
        },
        {
          component: "FormPostStatus",
        },
      ],
    }}
    {...props}
  />
);

export default AccountAuthLogin;
