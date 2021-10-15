import { lazy } from "react";

const variablePath = "/:comment_id/:list/:sort";

const RouterConfigComment = [
  {
    key: "comment",
    path: "/comment",
    redirectTo: "/search/comment",
  },
  {
    key: "commentComment",
    path: "/comment" + variablePath,
    ComponentLazy: lazy(() => import("../Comment")),
  },
];

export default RouterConfigComment;
