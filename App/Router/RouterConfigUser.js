import { lazy } from "react";

const variablePath = "/:username/:list/:sort/:filter";

const redirectFroms = ["/author", "/profile", "/u"];

const RouterConfigUser = [
  {
    key: "user",
    path: "/user",
    redirectFroms,
    redirectTo: "/search/user",
  },
  {
    key: "userUsername",
    path: "/user" + variablePath,
    redirectFroms: redirectFroms.map((rootPath) => rootPath + variablePath),
    disableHTMLDocumentUpdate: true,
    ComponentLazy: lazy(() => import("../Profile")),
  },
];

export default RouterConfigUser;
