import React from "react";
import { P } from "../Element";

const StorySidebarDescription = ({ description }) =>
  description ? <P id="sidebar-description">{description}</P> : null;

export default StorySidebarDescription;
