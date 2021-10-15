import { lazy } from "react";
import { name } from "../../../shared";

const RouterConfigWrite = [
  {
    key: "write",
    path: "/write",
    redirectFroms: ["/draft", "/publish"],
    viewAccess: "private",
    title: "Write",
    description:
      "Write, save & publish stories using " + name.main + "'s writing tools.",
    ComponentLazy: lazy(() => import("../Write")),
  },
];

export default RouterConfigWrite;
