import React, { Fragment } from "react";
import { numberLabel } from "simpul";
import { P, ButtonResolver } from "../Element";

function ProfileFeedContentZeroStatePosts({
  params: { filter, sort },
  content_owner: { subscription },
  name,
}) {
  const plural = filter;

  const singular = numberLabel(1, "filter").label;

  return subscription === "is_user" && sort === "top" ? (
    <P>
      Your top {plural} will be on display here. Once you have a {singular} with
      at least one like, your list will be up and running.
    </P>
  ) : subscription === "is_user" && filter === "stories" ? (
    <Fragment>
      <P>Your published stories will be on display here.</P>
      <ButtonResolver $underline resolve="write">
        Click here to publish your first story.
      </ButtonResolver>
    </Fragment>
  ) : subscription === "is_user" && filter === "comments" ? (
    <P>Any comments you post will be on display here.</P>
  ) : sort === "top" ? (
    <P>
      {name.title} does not have a top {singular} yet.
    </P>
  ) : (
    <P>
      {name.title} has not {filter === "comments" ? "posted" : "published"} any{" "}
      {plural} yet.
    </P>
  );
}

export default ProfileFeedContentZeroStatePosts;
