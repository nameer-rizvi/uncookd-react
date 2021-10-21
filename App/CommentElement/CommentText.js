import React from "react";
import { useSelector } from "react-redux";
import { markMatches } from "../../utils";
import { P, Button } from "../Element";

function CommentText({ comment_text = "", id }) {
  const { username } = useSelector((state) => state.user);

  if (comment_text) {
    let clean_comment_text = comment_text
      .replace(/ +/g, " ")
      .replace(/\n\s*\n/g, "\n\n");

    if (username)
      clean_comment_text = markMatches({
        string: clean_comment_text,
        mark: "@" + username,
        tagName: "b",
        useSanitizedString: true,
      });

    const Content = (
      <P
        className="comment-text"
        style={{ whiteSpace: "pre-wrap" }}
        dangerouslySetInnerHTML={{ __html: `"${clean_comment_text}"` }}
      />
    );

    return id ? (
      <Button
        initialStyle
        to={`/comment/${id}`}
        title="Go to comment page."
        $hoverUnderline
      >
        {Content}
      </Button>
    ) : (
      Content
    );
  } else return null;
}

export default CommentText;
