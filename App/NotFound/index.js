import React, { lazy } from "react";
import Loadable from "../Loadable";

const LoadableNotFound = (props) => (
  <Loadable Component={lazy(() => import("./NotFound"))} {...props} />
);

export default LoadableNotFound;
