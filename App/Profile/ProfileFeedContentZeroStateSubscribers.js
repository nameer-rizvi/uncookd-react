import React, { Fragment } from "react";
import { P, ButtonResolver } from "../Element";

const ProfileFeedContentZeroStateSubscribers = ({
  params: { filter },
  content_owner: { subscription },
  name,
}) =>
  subscription === "is_user" && filter === "requests" ? (
    <P>
      Your pending subscriber requests will be on display here -- for your eyes
      only.
    </P>
  ) : subscription === "is_user" ? (
    <Fragment>
      <P>
        Your subscribers will be on display here. Two great ways to gain
        subscribers are to:
      </P>
      <ButtonResolver $underline resolve="write">
        1. publish stories that other users may like, or,
      </ButtonResolver>
      <ButtonResolver $underline resolve="home">
        2. engage socially by posting honest feedback on stories by other users.
      </ButtonResolver>
    </Fragment>
  ) : (
    <P>{name.title} does not currently have any subscribers.</P>
  );

export default ProfileFeedContentZeroStateSubscribers;
