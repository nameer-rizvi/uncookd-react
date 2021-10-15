import React from "react";
import { useSelector } from "react-redux";
import SettingsAccountVerifyStyled from "./SettingsAccountVerifyStyled";
import AccountVerifiedBadge from "../AccountVerifiedBadge";
import { FlexBox, P, ButtonResolver } from "../Element";
import SettingsAccountVerifyCTA from "./SettingsAccountVerifyCTA";

function SettingsAccountVerify() {
  const { is_verified } = useSelector((state) => state.user);

  return (
    <SettingsAccountVerifyStyled>
      <AccountVerifiedBadge is_verified={is_verified} content="badge" />
      <FlexBox>
        <P $underline>
          Your account {is_verified ? "has" : "has not"} been verified.
        </P>
        <P>
          Verified accounts are accounts that have verified the ownership of
          their email.
        </P>
        <P>It is a requirement for posting stories and comments.</P>
        {!is_verified ? <SettingsAccountVerifyCTA /> : null}
        <ButtonResolver
          resolve="verified-account"
          $fontSize="ml"
          $justify="flex-start"
          $underline
        >
          Click here to learn more.
        </ButtonResolver>
      </FlexBox>
    </SettingsAccountVerifyStyled>
  );
}

export default SettingsAccountVerify;
