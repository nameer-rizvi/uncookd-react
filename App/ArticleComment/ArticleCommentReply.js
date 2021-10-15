import React from "react";
import { Button } from "../Element";

const ArticleCommentReply = ({ id }) => (
  <Button title="Reply to comment." to={`/comment/${id}#reply`}>
    reply
  </Button>
);

export default ArticleCommentReply;
