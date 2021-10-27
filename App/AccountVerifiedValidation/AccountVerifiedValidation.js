import React from "react";
import AccountVerifiedValidationStyled from "./AccountVerifiedValidationStyled";
import { P, B, ButtonResolver } from "../Element";
import { useSelector } from "react-redux";

function AccountVerifiedValidation({ action }) {
  const { is_verified } = useSelector((state) => state.user);

  if (!action) console.warn("Missing 'action'.");

  const ButtonProps = {
    resolve: "settings_account",
    target: "_blank",
    initialStyle: true,
    $underline: true,
  };

  return !is_verified ? (
    <AccountVerifiedValidationStyled>
      <P>
        You must have a <B>verified account</B> in order to {action}. Your
        account has not been verified yet.{" "}
        <ButtonResolver {...ButtonProps}>
          You can quickly verify it through your account settings page.
        </ButtonResolver>
      </P>
    </AccountVerifiedValidationStyled>
  ) : null;
}
export default AccountVerifiedValidation;
