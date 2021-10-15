// TODO: Update "Account Information" section.
//
// FUTURE:
//
// {
//   element: "H4_1",
//   str: "Logs and Usage"
// },
// {
//   element: "P",
//   str: "We may log information when you access and use the Services. This may include your browser type, referring site, the date and time of each request, and IP addresses."
// }

import React from "react";
import SiteStyled from "./SiteStyled";
import {
  H1_1,
  H3_1,
  H2_1,
  H4_1,
  P,
  UL,
  LI,
  Strong,
  ButtonResolver,
} from "../Element";
import { name, email } from "../../../shared";
import { capitalize } from "simpul";
import { effectiveDate } from "../../utils";

const SitePrivacy = () => (
  <SiteStyled>
    <H1_1>Privacy Policy</H1_1>
    <H3_1>This Privacy Policy applies to all of {name.main}’s Services.</H3_1>
    <H2_1>What information do we collect?</H2_1>
    <H3_1>Information you provide to us.</H3_1>
    <H4_1>Account Information</H4_1>
    <P>
      We collect information you provide under your Account settings. This may
      include your display name, website, bio, social media handles, and/or
      account preferences (provided under their respective headings: &quot;show
      email,&quot; &quot;account privacy,&quot; &quot;autosave drafts,&quot;
      &quot;backup stories,&quot; &quot;delete account,&quot; &quot;send
      notification when...,&quot; &quot;change password,&quot; and/or,
      &quot;feedback&quot;).
    </P>
    <H4_1>Content</H4_1>
    <P>
      We collect the stories and comments you post on our Service. This data is
      publicly accessible unless your account has been made private (under
      Account settings), in which case, public accessibility is partially
      limited.
    </P>
    <H4_1>Actions</H4_1>
    <P>
      We collect information about the actions you take when using our Service.
      This includes interactions with Content such as writing stories, saving
      stories, posting stories, deleting stories, bookmarking stories, liking
      stories, commenting on stories, deleting comments on stories, bookmarking
      comments on stories, liking comments on stories, replying to comments on
      stories, subscribing to hashtags, unsubscribing from hashtags, subscribing
      to users, unsubscribing from users, sending subscription requests to
      users, canceling subscription requests to users, accepting subscription
      requests from users, and/or, rejecting subscription requests from users.
    </P>
    <H4_1>Communications</H4_1>
    <ButtonResolver resolve="email_feedback" $display="initial" $underline>
      We collect any feedback directed to us at {email.feedback}.
    </ButtonResolver>
    <H3_1>Information we collect automatically.</H3_1>
    <H4_1>Cookies</H4_1>
    <P>
      We use cookies and similar technologies to recognize your user identity
      and saved preferences when you return to our Services.
    </P>
    <H3_1>How do we use this information?</H3_1>
    <P>
      The information we collect is used to provide, maintain, personalize, and
      improve our Service. This includes:
    </P>
    <UL>
      <LI>researching and developing new services,</LI>
      <LI>
        monitoring and analyzing trends, usage, and activities in connection
        with our Services,
      </LI>
      <LI>and, providing customer service.</LI>
    </UL>
    <P>
      {capitalize(name.main)} does not share, sell, trade, or rent Account
      Information or Content.
    </P>
    <Strong>Effective: {effectiveDate}.</Strong>
  </SiteStyled>
);

export default SitePrivacy;
