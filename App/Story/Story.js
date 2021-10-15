import React from "react";
import useStoryHTMLDocument from "./StoryHTMLDocument";
import useStoryNav from "./StoryNav";
import StoryPage from "../StoryPage";
import Page from "../Page";

function Story(props) {
  props.data.index = "story_main";

  useStoryHTMLDocument(props.data);

  useStoryNav(props);

  return <StoryPage $pagePadding {...props.data} />;
}

const PageStory = (props) => <Page Component={Story} {...props} />;

export default PageStory;
