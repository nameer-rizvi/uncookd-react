import React from "react";
import { useSelector } from "react-redux";
import GetComponent from "../GetComponent";
import Comment from "./Comment";
import { isNumber } from "simpul";

function CommentGet(props) {
  const componentName = "comment";

  const { id: currentCommentId } = useSelector(
    (state) => state.componentData[componentName]
  );

  const requestProps = {
    allowAnonymousRequest: true,
    requestCondition: isNumber(props.params.comment_id),
    url: "/comment",
    params: { comment_id: props.params.comment_id },
  };

  return (
    <GetComponent
      componentName={componentName}
      Component={Comment}
      requestProps={requestProps}
      refreshData={+props.params.comment_id !== currentCommentId}
      persistData
      {...props}
    />
  );
}

export default CommentGet;
