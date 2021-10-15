import React from "react";
import { label } from "../../../shared";
import {
  ArticleContainer,
  ArticleSectionMain,
  ArticleFooter,
  ArticleFooterList,
  ArticleTime,
} from "../Article";
import ArticleStorySectionLeft from "./ArticleStorySectionLeft";
import ArticleStoryHeader from "./ArticleStoryHeader";
import ArticleStoryHashtags from "./ArticleStoryHashtags";
import ArticleStoryDelete from "./ArticleStoryDelete";
import { TooltipButtonAuthor } from "../Tooltip";
import ArticleStoryLength from "./ArticleStoryLength";
import ArticleStoryNSFW from "./ArticleStoryNSFW";
import ArticleStoryCopyright from "./ArticleStoryCopyright";
import ArticleStoryActivity from "./ArticleStoryActivity";
import ArticleStoryRibbons from "./ArticleStoryRibbons";

function ArticleStory({
  index = "",
  svg = "story",
  id,
  story_id,
  slug,
  title,
  description,
  rich_text_story_substring,
  rich_text_story,
  hashtags,
  mainButton,
  onDelete,
  isPreview,
  isDraft,
  is_nsfw,
  count_words,
  count_chars,
  is_liked,
  is_bookmarked,
  excludeHashtagTooltip,
  excludeHashtagTooltipSubscribeButton,
  plainTextAuthorTooltip,
  excludeAuthorTooltip,
  excludeAuthorTooltipSubscribeButton,
  excludeCopyright,
  ...metadata
}) {
  title = label.title(title);

  if (story_id) id = story_id;

  return (
    <ArticleContainer id={index} className="article-story">
      <ArticleStorySectionLeft svg={svg} count_views={metadata.count_views} />
      <ArticleSectionMain>
        <ArticleStoryHeader
          index={index}
          id={id}
          slug={slug}
          title={title}
          author_username={metadata.author_username}
          author_display_name={metadata.author_display_name}
          description={description}
          rich_text_story_substring={rich_text_story_substring}
          rich_text_story={rich_text_story}
          author_content_access={metadata.author_content_access}
          mainButton={mainButton}
        />
        <ArticleStoryHashtags
          hashtags={hashtags}
          index={index}
          isPreview={isPreview}
          excludeTooltip={excludeHashtagTooltip}
          excludeTooltipSubscribeButton={excludeHashtagTooltipSubscribeButton}
        />
        {isDraft ? (
          <ArticleFooter>
            <ArticleFooterList
              list={[
                ArticleTime({ index, ...metadata }),
                ArticleStoryDelete({ index, isDraft, id, onDelete }),
              ]}
            />
          </ArticleFooter>
        ) : (
          <ArticleFooter>
            <ArticleFooterList
              list={[
                <TooltipButtonAuthor
                  className="story-article-author"
                  plainTextOnly={plainTextAuthorTooltip}
                  excludeTooltip={excludeAuthorTooltip}
                  excludeTooltipSubscribeButton={
                    excludeAuthorTooltipSubscribeButton
                  }
                  {...metadata}
                />,
                metadata.author_subscription === "is_user" &&
                  ArticleStoryDelete({ index, id, onDelete }),
              ]}
            />
            <ArticleFooterList
              list={[
                ArticleTime({ index, ...metadata }),
                ArticleStoryLength({ count_words, count_chars, index }),
                ArticleStoryNSFW({ is_nsfw, index }),
                !excludeCopyright &&
                  ArticleStoryCopyright({ isPreview, index, slug }),
              ]}
            />
            <ArticleFooterList
              list={ArticleStoryActivity({ index, slug, ...metadata })}
            />
          </ArticleFooter>
        )}
        <ArticleStoryRibbons
          isDraft={isDraft}
          isPreview={isPreview}
          author_content_access={metadata.author_content_access}
          id={id}
          index={index}
          is_liked={is_liked}
          is_bookmarked={is_bookmarked}
        />
      </ArticleSectionMain>
    </ArticleContainer>
  );
}

export default ArticleStory;
