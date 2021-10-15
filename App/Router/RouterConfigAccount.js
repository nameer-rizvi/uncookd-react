import { lazy } from "react";
import { name } from "../../../shared";
import RouterConfigDirectory from "./RouterConfigDirectory";

const RouterConfigAccount = [
  {
    key: "accountSignup",
    path: "/account/signup",
    redirectFroms: [
      "/signup",
      "/sign up",
      "/sign_up",
      "/sign-up",
      "/register",
      "/registration",
    ],
    viewAccess: "public",
    title: "Sign Up",
    description: "Sign-up for an account at " + name.main + ".",
    ComponentLazy: lazy(() => import("../Account/AccountAuthSignup")),
  },
  {
    key: "accountLogin",
    path: "/account/login",
    redirectFroms: [
      "/login",
      "/log in",
      "/log_in",
      "/log-in",
      "/signin",
      "/sign in",
      "/sign_in",
      "/sign-in",
    ],
    viewAccess: "public",
    title: "Login",
    description: "Log in to your " + name.main + " account.",
    ComponentLazy: lazy(() => import("../Account/AccountAuthLogin")),
  },
  {
    key: "accountForgotPassword",
    path: "/account/forgot-password",
    redirectFroms: [
      "/forgot-password",
      "/forgotpassword",
      "/forgot password",
      "/forgot_password",
    ],
    viewAccess: "public",
    title: "Forgot Password",
    description:
      "Submit your email to safely reset the password for your " +
      name.main +
      " account.",
    ComponentLazy: lazy(() => import("../Account/AccountForgotPassword")),
  },
  {
    key: "accountResetPassword",
    path: "/account/reset-password",
    redirectFroms: [
      "/reset-password",
      "/resetpassword",
      "/reset password",
      "/reset_password",
    ],
    viewAccess: "public",
    title: "Reset Password",
    description:
      "Safely reset the password for your " + name.main + " account.",
    ComponentLazy: lazy(() => import("../Account/AccountResetPassword")),
  },
  {
    key: "accountVerify",
    path: "/account/verify",
    title: "Verify Account",
    description: "Verify your " + name.main + " account.",
    ComponentLazy: lazy(() => import("../AccountVerify")),
  },
  {
    key: "accountSettings",
    path: "/account/settings/:page",
    redirectFroms: ["/settings"],
    viewAccess: "private",
    title: "Settings",
    description: "Change the Settings for your " + name.main + " account.",
    ComponentLazy: lazy(() => import("../Settings")),
  },
  {
    key: "accountNotifications",
    path: "/account/notifications/:page",
    redirectFroms: ["/notifications"],
    viewAccess: "private",
    title: "Notifications",
    description:
      "See the latest Notifications for your " + name.main + " account.",
    ComponentLazy: lazy(() => import("../Notifications")),
  },
];

const RouterConfigAccountWithDirectory = [
  RouterConfigDirectory("account", RouterConfigAccount, ["accountVerify"]),
  ...RouterConfigAccount,
];

export default RouterConfigAccountWithDirectory;
