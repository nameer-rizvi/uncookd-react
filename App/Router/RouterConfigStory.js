import { lazy } from "react";

const variablePath = "/:slug/:list/:sort";

const redirectFroms = ["/read"];

const RouterConfigStory = [
  {
    key: "story",
    path: "/story",
    redirectFroms,
    redirectTo: "/search/story",
  },
  {
    key: "storyStory",
    path: "/story" + variablePath,
    redirectFroms: redirectFroms.map((rootPath) => rootPath + variablePath),
    disableHTMLDocumentUpdate: true,
    ComponentLazy: lazy(() => import("../Story")),
  },
];

export default RouterConfigStory;
