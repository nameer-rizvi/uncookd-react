import React from "react";
import { objectKeyGroup } from "simpul";
import { socialMedia as socialMediaUtil } from "../../../shared";
import { ProfileMetaContainer } from "./ProfileStyled";
import { FlexBox } from "../Element";
import {
  ProfileMetaBy,
  ProfileMetaHeaderDisplayName,
  ProfileMetaHeaderUsername,
} from "./ProfileMetaHeader";
import AccountVerifiedBadge from "../AccountVerifiedBadge";
import { SubscribeButton } from "../Subscribe";
import ProfileMetaSocialMedia from "./ProfileMetaSocialMedia";
import ProfileMetaBio from "./ProfileMetaBio";
import ProfileMetaBirthday from "./ProfileMetaBirthday";
import ProfileMetaContact from "./ProfileMetaContact";

function ProfileMeta({
  subscription,
  name,
  bio,
  website,
  email,
  is_verified,
  id,
  joined_at,
  birthday,
  ...metadata
}) {
  const socialMedia = objectKeyGroup({
    keyStartsWith: socialMediaUtil.machineNamePrefix,
    object: metadata,
  });

  socialMedia.exists = Boolean(socialMedia.keys.length);

  const showPlaceholder =
    subscription === "is_user" &&
    !name.display_name &&
    !bio &&
    !website &&
    !email &&
    !socialMedia.exists;

  const containerId = bio || showPlaceholder ? "with-bio" : "";

  return (
    <ProfileMetaContainer
      id={containerId}
      className="profile-meta container-padding"
    >
      <FlexBox id="section-one">
        <ProfileMetaBy />
        <ProfileMetaHeaderDisplayName {...name} />
        <ProfileMetaHeaderUsername {...name} />
        <AccountVerifiedBadge excludeIfUnverified is_verified={is_verified} />
        <SubscribeButton
          type="user"
          user_id={id}
          subscription={subscription}
          name={name}
        />
        <ProfileMetaSocialMedia {...socialMedia} name={name} />
      </FlexBox>
      <FlexBox id="section-two">
        <ProfileMetaBio showPlaceholder={showPlaceholder} bio={bio} />
        <ProfileMetaBirthday joined_at={joined_at} birthday={birthday} />
        <ProfileMetaContact name={name} website={website} email={email} />
      </FlexBox>
    </ProfileMetaContainer>
  );
}

export default ProfileMeta;
