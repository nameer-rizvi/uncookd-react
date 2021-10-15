import React from "react";
import { useSelector } from "react-redux";
import useCommentFormToggle from "./CommentFormToggle";
import CommentFormSchema from "./CommentFormSchema";
import CommentFormStyled from "./CommentFormStyled";
import AccountVerifiedValidation from "../AccountVerifiedValidation";
import { FormGenerator } from "../Form";

function CommentForm({
  type = "comment",
  initialToggleState,
  feedName,
  story_id,
  comment_reply_id,
  comment_level,
}) {
  const { isLoggedIn } = useSelector((state) => state.user);

  const { toggle, ToggleButton } = useCommentFormToggle(
    type,
    initialToggleState
  );

  if (isLoggedIn && story_id) {
    const schema = CommentFormSchema(type, feedName);

    schema.addValues = { story_id, comment_reply_id, comment_level };

    return (
      <CommentFormStyled>
        {ToggleButton}
        {toggle.state ? <AccountVerifiedValidation /> : null}
        {toggle.state ? <FormGenerator {...schema} /> : null}
      </CommentFormStyled>
    );
  } else return null;
}

export default CommentForm;
