import React from "react";
import { font, label } from "../../../shared";
import {
  StoryPageContainer,
  StoryPageHeader,
  StoryPageCite,
} from "./StoryPageStyled";
import StoryPageTitle from "./StoryPageTitle";
import { TooltipButton } from "../Tooltip";
import ContentAccessProvider from "../ContentAccess";
import StoryPageQuill from "./StoryPageQuill";

const defaultFontFamily = font.configs.find(({ isDefault }) => isDefault).key;

const StoryPage = ({
  $pagePadding,
  font_family = defaultFontFamily,
  title,
  slug,
  author_id,
  author_display_name,
  author_username,
  author_bio,
  author_content_access,
  author_subscription,
  excludeTooltip,
  excludeTooltipSubscribeButton,
  rich_text_story,
}) => (
  <StoryPageContainer
    id="story-page"
    $pagePadding={$pagePadding}
    style={{ fontFamily: font.family(font_family) }}
  >
    <StoryPageHeader>
      <StoryPageTitle
        title={title}
        slug={slug}
        author_content_access={author_content_access}
      />
      <StoryPageCite id="story-page-author">
        <TooltipButton
          Template="TooltipButtonUser"
          user_id={author_id}
          username={author_username}
          display_name={author_display_name}
          bio={author_bio}
          subscription={author_subscription}
          content_access={author_content_access}
          excludeTooltip={excludeTooltip}
          excludeSubscribeButton={excludeTooltipSubscribeButton}
        >
          {label.author({ author_username, author_display_name })}
        </TooltipButton>
      </StoryPageCite>
    </StoryPageHeader>
    <ContentAccessProvider
      id={author_id}
      subscription={author_subscription}
      content_access={author_content_access}
      username={author_username}
      display_name={author_display_name}
    >
      <StoryPageQuill rich_text_story={rich_text_story} />
    </ContentAccessProvider>
  </StoryPageContainer>
);

export default StoryPage;
