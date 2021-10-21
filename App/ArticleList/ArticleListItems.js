import React from "react";
import ArticleComment from "../ArticleComment";
import ArticleError from "../ArticleError";
import ArticleHashtag from "../ArticleHashtag";
import ArticleInterruption from "../ArticleInterruption";
import ArticleNotification from "../ArticleNotification";
import ArticleStory from "../ArticleStory";
import ArticleUser from "../ArticleUser";
import ArticleListItem from "./ArticleListItemWithObserver";

// Story item doesn't have a condition since no properties for
// a story article are actually required (ex. title, description).

function ArticleListItems({ rows, ArticleProps, ...rest }) {
  let arr = [];

  for (let i = 0; i < rows.length; i++) {
    let listItem = rows[i];

    if (listItem && listItem.content_type) {
      let listItemConfig = [
        {
          condition: listItem.content_type === "comment_article",
          index: listItem.content_type + "_" + i,
          Article: ArticleComment,
        },
        {
          condition: listItem.content_type === "error_article",
          index: listItem.content_type + "_" + i,
          Article: ArticleError,
        },
        {
          condition: listItem.content_type === "hashtag_article",
          index: listItem.content_type + "_" + i,
          Article: ArticleHashtag,
        },
        {
          condition: listItem.content_type === "interruption_article",
          index: listItem.content_type + "_" + i,
          Article: ArticleInterruption,
        },
        {
          condition: listItem.content_type === "notification_article",
          index: listItem.content_type + "_" + i,
          Article: ArticleNotification,
        },
        {
          condition: listItem.content_type === "user_article",
          index: listItem.content_type + "_" + i,
          Article: ArticleUser,
        },
        {
          condition: listItem.content_type === "story_article",
          index: listItem.content_type + "_" + i,
          Article: ArticleStory,
        },
      ].find(({ condition }) => condition);

      if (listItemConfig)
        arr.push(
          <ArticleListItem
            key={listItemConfig.index}
            index={listItemConfig.index}
            Article={listItemConfig.Article}
            item={listItem}
            {...rest}
            {...ArticleProps && ArticleProps({ ...listItem, ...rest })}
          />
        );
    }
  }

  return arr;
}

export default ArticleListItems;
