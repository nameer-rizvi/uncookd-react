import React from "react";
import { URLQuery } from "../../utils";
import { AccountContainer } from "./AccountStyled";
import { H4 } from "../Element";
import { FormGenerator } from "../Form";
import AccountResetPasswordSchema from "./AccountResetPasswordSchema";
import NotFound from "../NotFound";

function AccountResetPassword() {
  const token = URLQuery.get("token");

  return token ? (
    <AccountContainer $align="center">
      <H4 style={{ marginBottom: 10 }}>RESET PASSWORD FORM</H4>
      <FormGenerator {...AccountResetPasswordSchema} addValues={{ token }} />
    </AccountContainer>
  ) : (
    <NotFound />
  );
}

export default AccountResetPassword;
