import React from "react";
import { ButtonResolver, P } from "../Element";

const ProfileMetaBio = ({ showPlaceholder, bio }) =>
  showPlaceholder ? (
    <ButtonResolver id="bio" resolve="settings" $hoverUnderline>
      Click here or the settings cog icon to add your display name, bio,
      website, email or social media handles.
    </ButtonResolver>
  ) : bio ? (
    <P id="bio">{bio}</P>
  ) : null;

export default ProfileMetaBio;
