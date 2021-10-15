import React from "react";
import { Button, FlexBox, SpanPipe } from "../Element";

const ProfileMetaContactWebsite = ({ website, name }) =>
  website ? (
    <Button
      id="website"
      title={`Go to website for ${name.title}.`}
      href={website.includes("http") ? website : "https://" + website}
      style={{ minWidth: "fit-content" }}
      $underline
    >
      website
    </Button>
  ) : null;

const ProfileMetaContactEmail = ({ email, name }) =>
  email ? (
    <Button
      id="email"
      title={`Compose email for ${name.title}.`}
      href={"mailto:" + email}
      $underline
    >
      email
    </Button>
  ) : null;

const ProfileMetaContact = ({ website, email, name }) =>
  website || email ? (
    <FlexBox id="contact" $row>
      <ProfileMetaContactWebsite website={website} name={name} />
      {email && website ? <SpanPipe /> : null}
      <ProfileMetaContactEmail email={email} name={name} />
    </FlexBox>
  ) : null;

export default ProfileMetaContact;
