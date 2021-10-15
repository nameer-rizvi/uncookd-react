import { lazy } from "react";
import { name } from "../../../shared";
import { isEnv } from "simpul";
import RouterConfigDirectory from "./RouterConfigDirectory";

const RouterConfigSite = [
  {
    key: "siteAbout",
    path: "/site/about",
    redirectFroms: ["/about"],
    title: "About",
    description:
      "Learn what " + name.main + " is and what makes it so special.",
    ComponentLazy: lazy(() => import("../Site/SiteAbout")),
  },
  {
    key: "siteTerms",
    path: "/site/terms",
    redirectFroms: [
      "/terms",
      "/termsofuse",
      "/terms of use",
      "/terms-of-use",
      "/terms_of_use",
      "/termsandconditions",
      "/terms and conditions",
      "/terms-and-conditions",
      "/terms_and_conditions",
    ],
    title: "Terms of Use",
    description: "Terms of Use agreement for " + name.main + ".",
    ComponentLazy: lazy(() => import("../Site/SiteTerms")),
  },
  {
    key: "sitePrivacy",
    path: "/site/privacy",
    redirectFroms: [
      "/privacy",
      "/privacypolicy",
      "/privacy policy",
      "/privacy-policy",
      "/privacy_policy",
    ],
    title: "Privacy Policy",
    description: "Privacy Policy for " + name.main + ".",
    ComponentLazy: lazy(() => import("../Site/SitePrivacy")),
  },
  {
    key: "siteVerifiedAccount",
    path: "/site/verified-account",
    redirectFroms: [
      "/verifiedaccount",
      "/verified account",
      "/verified-account",
      "/verified_account",
    ],
    title: "Verified Account",
    description: "Learn what a Verified Account is on " + name.main + ".",
    ComponentLazy: lazy(() => import("../Site/SiteVerifiedAccount")),
  },
  !isEnv.live && {
    key: "siteSandbox",
    path: "/site/sandbox",
    viewAccess: "development",
    title: "Sandbox",
    description:
      "Play around and experiment with code here in the sandbox, kiddo.",
    ComponentLazy: lazy(() => import("../SiteSandbox")),
  },
].filter(Boolean);

const RouterConfigSiteWithDirectory = [
  RouterConfigDirectory("site", RouterConfigSite),
  ...RouterConfigSite,
];

export default RouterConfigSiteWithDirectory;
