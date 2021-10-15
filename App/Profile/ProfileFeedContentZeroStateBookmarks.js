import React, { Fragment } from "react";
import { numberLabel } from "simpul";
import { P, ButtonResolver } from "../Element";

function ProfileFeedContentZeroStateBookmarks({
  params: { filter, sort },
  content_owner: { subscription },
  name,
}) {
  const plural = filter;

  const singular = numberLabel(1, filter).label;

  return subscription === "is_user" && sort === "top" ? (
    <P>
      Your top {singular} bookmarks will be on display here. Once a {singular}{" "}
      you've bookmarked has at least one like, this list will be up and running.
    </P>
  ) : subscription === "is_user" ? (
    <Fragment>
      <P>Your {singular} bookmarks will be on display here.</P>
      {filter === "stories" ? (
        <ButtonResolver $underline resolve="home">
          Click here to bookmark your first story.
        </ButtonResolver>
      ) : null}
    </Fragment>
  ) : sort === "top" ? (
    <P>
      {name.title} does not have a top {singular} bookmark yet.
    </P>
  ) : (
    <P>
      {name.title} has not bookmarked any {plural} yet.
    </P>
  );
}

export default ProfileFeedContentZeroStateBookmarks;
