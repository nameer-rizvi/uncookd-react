import React from "react";
import { P, ButtonResolver } from "../Element";
import { FormSmallLabelStyle } from "../Form";

const AccountAuthSignupCustom = ({ disabled }) => (
  <P {...FormSmallLabelStyle} disabled={disabled}>
    By signing up, you agree with our{" "}
    <ButtonResolver resolve="terms" initialStyle $underline>
      Terms of Use
    </ButtonResolver>{" "}
    and{" "}
    <ButtonResolver resolve="privacy" initialStyle $underline>
      Privacy Policy
    </ButtonResolver>
    .
  </P>
);

export default AccountAuthSignupCustom;
