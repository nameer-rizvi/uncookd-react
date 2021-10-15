import React from "react";
import { AccountContainer } from "./AccountStyled";
import { H4, P } from "../Element";
import { FormGenerator } from "../Form";
import AccountForgotPasswordSchema from "./AccountForgotPasswordSchema";

const AccountForgotPassword = () => (
  <AccountContainer>
    <H4>FORGOT PASSWORD FORM</H4>
    <P $fontSize="ml">
      Enter your email and we&apos;ll send you a password reset link.
    </P>
    <FormGenerator {...AccountForgotPasswordSchema} />
  </AccountContainer>
);

export default AccountForgotPassword;
