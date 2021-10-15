import React from "react";
import SiteStyled from "./SiteStyled";
import { H1_1, H3_1, H4_1, H2_1, P } from "../Element";
import AccountVerifiedBadge from "../AccountVerifiedBadge";

const SiteVerifiedAccount = () => (
  <SiteStyled>
    <H1_1>Verified Account</H1_1>
    <H3_1>
      Verified accounts are accounts that have confirmed the ownership of their
      email.
    </H3_1>
    <H4_1>Verified Account Badge</H4_1>
    <P>
      Verified accounts will have a verification badge on their profiles that
      look like this:
    </P>
    <AccountVerifiedBadge
      content="full"
      span={{ style: { marginTop: 15 } }}
      is_verified
    />
    <H2_1>Community authenticity.</H2_1>
    <P>
      We do not allow users to post stories or comments until they've verified
      their account. This is to help prevent bots/malicious users from creating
      accounts using fake emails (with the obvious intention to spam the
      community with unsolicited stories and comments).
    </P>
    <H2_1>Community safety.</H2_1>
    <P>
      This means that all stories and comments are made by users that have
      confirmed their email through the verification process. This also means
      that all users who post stories and/or comments have confirmed that they
      are reachable via email should there ever be a need to communicate website
      safety & protocol.
    </P>
    <H2_1>Community pledge.</H2_1>
    <P>
      We do our best to put in place measures that lead to a safer and more
      authentic writing community. Our hope is that this is just another small
      step we can take to ensure just that.
    </P>
  </SiteStyled>
);

export default SiteVerifiedAccount;
