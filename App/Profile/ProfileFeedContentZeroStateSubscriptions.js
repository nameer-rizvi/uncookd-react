import React, { Fragment } from "react";
import { P, ButtonResolver } from "../Element";

const ProfileFeedContentZeroStateSubscriptions = ({
  params: { filter },
  content_owner: { subscription },
  name,
}) =>
  filter === "hashtags" && subscription === "is_user" ? (
    <Fragment>
      <P>Hashtags you subscribe to will be on display here.</P>
      <ButtonResolver $underline resolve="search_hashtags">
        Click here to find some hashtags.
      </ButtonResolver>
    </Fragment>
  ) : filter === "hashtags" ? (
    <P>{name.title} does not currently have any hashtag subscriptions.</P>
  ) : filter === "users" && subscription === "is_user" ? (
    <Fragment>
      <P>Users you subscribe to will be on display here.</P>
      <ButtonResolver $underline resolve="search_users">
        Click here to find some users to subscribe to.
      </ButtonResolver>
    </Fragment>
  ) : filter === "users" ? (
    <P>{name.title} does not currently have any user subscriptions.</P>
  ) : filter === "requests" && subscription === "is_user" ? (
    <P>
      Any pending subscription requests you send will be on display here -- for
      your eyes only.
    </P>
  ) : null;

export default ProfileFeedContentZeroStateSubscriptions;
