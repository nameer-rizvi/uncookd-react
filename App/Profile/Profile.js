import React from "react";
import { label } from "../../../shared";
import useProfileHTMLDocument from "./ProfileHTMLDocument";
import { ProfileContainer } from "./ProfileStyled";
import ProfileMeta from "./ProfileMeta";
import ProfileFeed from "./ProfileFeed";

function Profile(props) {
  const { username, display_name } = props.data;

  props.data.name = {
    display_name,
    username,
    title: label.user({ display_name, username }), // parenthesize: true
  };

  useProfileHTMLDocument({ name: props.data.name });

  return (
    <ProfileContainer>
      <ProfileMeta {...props.data} />
      <ProfileFeed {...props} />
    </ProfileContainer>
  );
}

export default Profile;
