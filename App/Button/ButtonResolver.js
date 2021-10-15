import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { name, email, elementId } from "../../../shared";
import { renderModalComponent } from "../../utils";
import { modalClose, logout } from "../../redux";
import Button from "./Button";

function ButtonResolver({ resolve, ...rest }) {
  const dispatch = useDispatch();

  const { username } = useSelector((state) => state.user);

  const resolver = {
    about: {
      name: "open_about",
      title: `Open ${name.main}'s about page.`,
      onClick: () => renderModalComponent({ location: "/site/about" }),
    },
    email_author: {
      title: `Compose email to ${email.author}.`,
      href: "mailto:" + email.author,
    },
    email_feedback: {
      title: `Compose email to ${email.feedback}.`,
      href: "mailto:" + email.feedback,
    },
    forgot_password: {
      name: "open_forgot_password",
      title: "Open forgot password form.",
      onClick: () =>
        renderModalComponent({ location: "/account/forgot-password" }),
    },
    home: {
      to: "/",
      title: `Go to ${name.main}'s home page.`,
      onClick: () => dispatch(modalClose()),
    },
    login: {
      name: "open_login",
      title: "Open login form.",
      onClick: () => renderModalComponent({ location: "/account/login" }),
    },
    logout: {
      name: "logout",
      title: "Log out.",
      onClick: logout,
    },
    notifications: {
      name: "open_notifications",
      title: "Open your notifications.",
      onClick: () =>
        renderModalComponent({ location: "/account/notifications" }),
    },
    privacy: {
      name: "open_privacy",
      title: `Open ${name.main}'s privacy policy page.`,
      onClick: () => renderModalComponent({ location: "/site/privacy" }),
    },
    reload: {
      name: "reload_page",
      title: "Refresh page.",
      onClick: () => window.location.reload(),
    },
    search_comments: {
      to: "/search/comment",
      title: "Go to comment search page.",
    },
    search_hashtags: {
      to: "/search/hashtag",
      title: "Go to hashtag search page.",
    },
    search_stories: {
      to: "/search/story",
      title: "Go to story search page.",
    },
    search_users: {
      to: "/search/user",
      title: "Go to user search page.",
    },
    settings: {
      to: "/account/settings",
      title: "Go to your settings page.",
    },
    settings_account: {
      to: "/account/settings/account",
      title: "Go to your account settings page.",
    },
    settings_notifications: {
      to: "/account/settings/notifications",
      title: "Go to your notifications settings page.",
    },
    signup: {
      name: "open_signup",
      title: "Open sign up form.",
      onClick: () => renderModalComponent({ location: "/account/signup" }),
    },
    sandbox: {
      to: "/site/sandbox",
      title: "Go to dev sandbox page.",
    },
    skip_to_feed: {
      target: "_self",
      href: "#" + elementId.feed,
      hiddenText: "Skip to page feed.",
    },
    skip_to_footer: {
      target: "_self",
      href: "#" + elementId.footer,
      hiddenText: "Skip to site footer.",
    },
    skip_to_main: {
      target: "_self",
      href: "#" + elementId.main,
      hiddenText: "Skip to main content.",
    },
    terms: {
      name: "open_terms",
      title: `Open ${name.main}'s terms of use page.`,
      onClick: () => renderModalComponent({ location: "/site/terms" }),
    },
    user: {
      to: "/user/" + username,
      title: "Go to your profile page.",
    },
    "verified-account": {
      name: "open_verified_account_info",
      title: "Learn what a verified account is.",
      onClick: () =>
        renderModalComponent({ location: "/site/verified-account" }),
    },
    write: {
      to: "/write",
      title: "Go to your writing app.",
    },
  };

  const resolvedProps = resolver[resolve];

  if (!resolvedProps) {
    console.warn("Invalid 'resolve': " + resolve);
    return null;
  } else {
    const props = {
      ...resolvedProps,
      ...rest,
      onClick: (e) => {
        if (resolvedProps.onClick) resolvedProps.onClick(e);
        if (rest.onClick) rest.onClick(e);
      },
    };

    return <Button {...props} />;
  }
}

export default ButtonResolver;
