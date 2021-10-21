import { lazy } from "react";

const RouterConfigAdmin = [
  {
    key: "admin",
    path: "/admin/:page",
    viewAccess: "private",
    title: "Admin",
    description: "Admin dashboard.",
    ComponentLazy: lazy(() => import("../Admin")),
  },
];

export default RouterConfigAdmin;
