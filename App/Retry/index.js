import React, { lazy } from "react";
import Loadable from "../Loadable";

const RetryLoadable = (props) => (
  <Loadable Component={lazy(() => import("./Retry"))} {...props} />
);

export default RetryLoadable;
