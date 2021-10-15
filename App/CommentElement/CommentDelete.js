import React, { Fragment } from "react";
import { useRequestState, useToggle } from "../../hooks";
import { snakeCase } from "change-case";
import { request } from "../../utils";
import { articleDelete } from "../../redux";
import { Span, Button } from "../Element";

function CommentDelete({ index, id, onDelete }) {
  const requestState = useRequestState();

  const toggle = useToggle();

  const makeName = (action = "") => snakeCase(`${index} delete ${action}`);

  const style = { margin: "0 4px" };

  const buttons = [
    {
      name: makeName(),
      title: "Delete comment.",
      children: requestState.error ? "failed to delete, try again?" : "delete",
      onClick: toggle.change,
    },
    {
      name: makeName("request"),
      title: "Confirm comment delete.",
      children: "yes",
      onClick: () =>
        request({
          ...requestState,
          url: "/comment",
          method: "DELETE",
          params: { id },
          onSuccess: () => {
            if (onDelete) onDelete();
            articleDelete("comment", id);
          },
          onFail: toggle.change,
        }),
      style,
    },
    {
      name: makeName("cancel"),
      title: "Cancel comment delete.",
      children: "no",
      onClick: toggle.change,
      style,
    },
  ];

  return requestState.pending ? (
    <Span>deleting...</Span>
  ) : toggle.state ? (
    <Fragment>
      <Span>are you sure?</Span> <Button {...buttons[1]} /> /{" "}
      <Button {...buttons[2]} />
    </Fragment>
  ) : (
    <Button {...buttons[0]} />
  );
}

export default CommentDelete;
