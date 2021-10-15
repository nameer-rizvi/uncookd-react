import React from "react";
import { Cite } from "../Element";
import { TooltipButton } from "../Tooltip";
import { label } from "../../../shared";

const StorySidebarAuthor = ({
  author_id,
  author_username,
  author_display_name,
  author_subscription,
  author_content_access,
}) => (
  <Cite id="sidebar-author">
    <TooltipButton
      Template="TooltipButtonUser"
      user_id={author_id}
      username={author_username}
      display_name={author_display_name}
      subscription={author_subscription}
      content_access={author_content_access}
    >
      {label.author({ author_username, author_display_name })}
    </TooltipButton>
  </Cite>
);

export default StorySidebarAuthor;
