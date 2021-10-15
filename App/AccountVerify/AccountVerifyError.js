import React, { Fragment } from "react";
import AccountVerifiedBadge from "../AccountVerifiedBadge";
import { parseErrorString } from "../../utils";
import { P, ButtonResolver } from "../Element";

function AccountVerifyError({ error, isLoggedIn }) {
  const Title = (
    <AccountVerifiedBadge
      content="full"
      span={{ style: { marginBottom: 15 } }}
      text={{ label: "Verification Failed", $fontSize: "l" }}
    />
  );

  error = parseErrorString(error);

  const isExpiredToken = error && error.toLowerCase().includes("expired");

  const Blurb = isExpiredToken ? (
    <P>
      Your verification link has expired. You must {!isLoggedIn && "login and"}{" "}
      go to your account settings page to request a new verification link in
      your email.
    </P>
  ) : (
    <P>Looks like we failed to verify your account.</P>
  );

  const CTA = isExpiredToken ? (
    isLoggedIn ? (
      <ButtonResolver resolve="settings_account">
        Click here to go to your account settings page.
      </ButtonResolver>
    ) : (
      <ButtonResolver resolve="login">Click here to login.</ButtonResolver>
    )
  ) : (
    <ButtonResolver resolve="reload">Click here to try again.</ButtonResolver>
  );

  return (
    <Fragment>
      {Title}
      {Blurb}
      {CTA}
    </Fragment>
  );
}

export default AccountVerifyError;
