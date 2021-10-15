import { lazy } from "react";
import NotFound from "../NotFound";

const RouterConfigDefault = [
  {
    key: "home",
    path: "/",
    ComponentLazy: lazy(() => import("../Home")),
  },
  {
    key: "notFound",
    title: "Not Found",
    description: "This page does not exist or is not available.",
    Component: NotFound,
  },
];

export default RouterConfigDefault;
