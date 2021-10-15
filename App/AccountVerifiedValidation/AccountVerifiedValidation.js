import React from "react";
import AccountVerifiedValidationStyled from "./AccountVerifiedValidationStyled";
import { P, B, ButtonResolver } from "../Element";
import { useSelector } from "react-redux";

function AccountVerifiedValidation() {
  const { user, router } = useSelector((state) => state);

  const action =
    router.location.pathname === "/write"
      ? "publish stories"
      : router.location.pathname &&
        router.location.pathname.startsWith("/story")
      ? "post comments"
      : router.location.pathname &&
        router.location.pathname.startsWith("/comment")
      ? "post replies"
      : "[TODO:AccountVerifiedValidation.js]";

  const ButtonProps = {
    resolve: "settings_account",
    target: "_blank",
    initialStyle: true,
    $underline: true,
  };

  return !user.is_verified ? (
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
