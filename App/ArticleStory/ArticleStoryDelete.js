import React, { Fragment } from "react";
import { useRequestState, useToggle } from "../../hooks";
import { snakeCase } from "change-case";
import { request } from "../../utils";
import { articleDelete } from "../../redux";
import { Span, Button } from "../Element";

function ArticleStoryDelete({ index, isDraft, id, onDelete }) {
  const requestState = useRequestState();

  const toggle = useToggle();

  const makeName = (action = "") => snakeCase(`${index} delete ${action}`);

  const style = { margin: "0 4px" };

  function onDeleteSuccess(response) {
    if (onDelete) onDelete({ id, response });
    if (!isDraft) articleDelete("story", id);
  }

  const buttons = [
    {
      name: makeName(),
      title: "Delete story.",
      children: requestState.error ? "failed to delete, try again?" : "delete",
      onClick: toggle.change,
    },
    {
      name: makeName("request"),
      title: "Confirm story delete.",
      children: "yes",
      onClick: () =>
        request({
          ...requestState,
          method: "DELETE",
          url: isDraft ? "/draft" : "/story",
          params: { id },
          onSuccess: onDeleteSuccess,
          onFail: toggle.change,
        }),
      style,
    },
    {
      name: makeName("cancel"),
      title: "Cancel story delete.",
      children: "no",
      onClick: toggle.change,
      style,
    },
  ];

  return requestState.pending ? (
    <Span>deleting...</Span>
  ) : toggle.state ? (
    <Fragment>
      <Span>are you sure?</Span> <Button {...buttons[1]} />
      {" / "}
      <Button {...buttons[2]} />
    </Fragment>
  ) : (
    <Button {...buttons[0]} />
  );
}

export default ArticleStoryDelete;
