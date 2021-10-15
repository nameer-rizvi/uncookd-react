import { lazy } from "react";
import { getSearchPageMetadata } from "../../utils";

const RouterConfigSearch = [
  {
    key: "search",
    path: "/search/:list",
    title: (props) => getSearchPageMetadata(props).title.document,
    description: (props) => getSearchPageMetadata(props).title.page.join(" "),
    ComponentLazy: lazy(() => import("../Search")),
  },
];

export default RouterConfigSearch;
