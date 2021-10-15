import { componentDataUpdateRecursive } from "../redux";

function useContentTypePropControllerUpdateReduxState({
  type,
  dispatch,
  id,
  propName,
  responseData,
}) {
  function handleObject(object) {
    if (type === "user") {
      const isUserObject =
        object.content_type === "user_page" ||
        object.content_type === "user_article"
          ? object.user_id
            ? object.user_id === id
            : object.id === id
          : false;

      const isAuthorObject =
        [
          "story_page",
          "story_article",
          "comment_page",
          "comment_article",
        ].includes(object.content_type) && object.author_id === id;

      const authorId = "author_";

      const isContentOwnerObject =
        object.content_owner && object.content_owner.id === id;

      if (isUserObject && object[propName]) {
        object[propName] = responseData[propName];
      } else if (isAuthorObject && object[authorId + propName]) {
        object[authorId + propName] = responseData[propName];
      } else if (isContentOwnerObject && object.content_owner[propName])
        object.content_owner[propName] = responseData[propName];
    } else if (type === "hashtag") {
      const isHashtagObject =
        object.content_type === "hashtag_page" ||
        object.content_type === "hashtag_article"
          ? object.value
            ? object.value === id
            : object.hashtag === id
          : false;

      if (isHashtagObject) object[propName] = responseData[propName];
    } else if (type === "story") {
      const isStoryObject =
        object.content_type === "story_page" ||
        object.content_type === "story_article"
          ? object.story_id
            ? object.story_id === id
            : object.id === id
          : false;

      if (isStoryObject) object[propName] = responseData[propName];
    } else if (type === "comment") {
      const isCommentObject =
        object.content_type === "comment_page" ||
        object.content_type === "comment_article"
          ? object.comment_id
            ? object.comment_id === id
            : object.id === id
          : false;

      if (isCommentObject) object[propName] = responseData[propName];
    }
  }

  dispatch(componentDataUpdateRecursive({ handleObject }));
}

export default useContentTypePropControllerUpdateReduxState;
