import React from "react";
import { Button } from "../Element";

const StorySidebarTitle = ({ title, history, slug }) => (
  <Button
    name="close_story_sidebar"
    id="sidebar-title"
    title="Click here to close sidebar and read story."
    onClick={() => history.push(`/story/${slug}`)}
  >
    {title}
  </Button>
);

export default StorySidebarTitle;
