import React from "react";
import { FlexBox, ButtonSimulateClick } from "../Element";
import StoryDelete from "../ArticleStory/ArticleStoryDelete";

const StorySidebarDelete = ({ author_subscription, index, id }) =>
  author_subscription === "is_user" ? (
    <FlexBox id="sidebar-delete">
      <StoryDelete
        index={index}
        id={id}
        onDelete={() => ButtonSimulateClick({ to: "/" })}
      />
    </FlexBox>
  ) : null;

export default StorySidebarDelete;
