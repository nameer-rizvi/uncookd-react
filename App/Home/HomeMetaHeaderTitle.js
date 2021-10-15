import React from "react";
import { H1 } from "../Element";
import { label } from "../../../shared";

const HomeMetaHeaderTitle = ({ title }) => (
  <H1 id="home-meta-header-title">
    {title} {title ? "stories" : label.hashtag("stories")}
  </H1>
);

export default HomeMetaHeaderTitle;
