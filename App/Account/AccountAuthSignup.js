import React from "react";
import AccountAuthTemplate from "./AccountAuthTemplate";
import { authFormRedirect } from "../../redux";
import AccountAuthSignupCustom from "./AccountAuthSignupCustom";

const AccountAuthSignup = (props) => (
  <AccountAuthTemplate
    title="SIGN UP FORM"
    schema={{
      id: "signup",
      components: [
        {
          component: "FormFieldInput",
          name: "username",
          autoComplete: "username",
          required: true,
        },
        {
          component: "FormFieldInput",
          type: "email",
          name: "email",
          autoComplete: "email",
          required: true,
        },
        {
          component: "FormFieldInput",
          label: "password",
          type: "password",
          name: "password1",
          autoComplete: "new-password",
          required: true,
        },
        {
          component: "FormFieldInput",
          label: "confirm password",
          type: "password",
          name: "password2",
          autoComplete: "new-password",
          required: true,
        },
        {
          component: "FormSubmitButton",
          name: "submit_signup",
          title: "Submit sign up form.",
          onSubmit: {
            allowAnonymousRequest: true,
            url: "/user/account/signup",
            onSuccess: authFormRedirect,
            message: {
              pending: "Signing up...",
              success: "Signed up!",
              error: "Failed to sign up.",
            },
          },
        },
        {
          component: "FormButtonResolver",
          resolve: "login",
          children: "Or click here to log in.",
          $underline: true,
        },
        {
          component: "Custom",
          Component: AccountAuthSignupCustom,
        },
        {
          component: "FormPostStatus",
        },
      ],
    }}
    {...props}
  />
);

export default AccountAuthSignup;
