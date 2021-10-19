import React, { Fragment } from "react";
import AccountVerifiedBadge from "../AccountVerifiedBadge";
import { P, ButtonResolver } from "../Element";

const AccountVerifySuccess = ({ isLoggedIn }) => (
  <Fragment>
    <AccountVerifiedBadge
      content="full"
      span={{ style: { marginBottom: 15 } }}
      text={{ label: "Verification Successful", $fontSize: "l" }}
      is_verified
    />
    <P>
      Thank you for verifying your account. You can now publish stories and post
      comments.
    </P>
    {isLoggedIn ? (
      <ButtonResolver resolve="write">
        Click here to publish your first story.
      </ButtonResolver>
    ) : (
      <ButtonResolver resolve="login">Click here to login.</ButtonResolver>
    )}
  </Fragment>
);

export default AccountVerifySuccess;
