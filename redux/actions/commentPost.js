import { store } from "../store";
import { componentDataUpdateAssign } from "./componentDataUpdateAssign";

export function commentPost({ feedName, responseData, formValues }) {
  const { componentData, user } = store.getState();

  const feedData = componentData[feedName];

  if (feedData && feedData.rows) {
    const newComment = {
      content_type: "comment_article",
      id: responseData.comment_id,
      author_id: user.id,
      author_username: user.username,
      author_is_user: true,
      comment_level: responseData.comment_level,
      count_likes: 0,
      count_replies: 0,
      is_bookmarked: 0,
      is_liked: 0,
      posted_at: new Date(),
      ...formValues,
    };

    feedData.rows.unshift(newComment);

    componentDataUpdateAssign({ [feedName]: feedData });

    const articleListItemNodes = document.getElementsByClassName(
      "article-list-item"
    );

    if (articleListItemNodes[0]) articleListItemNodes[0].scrollIntoView();
  }
}
