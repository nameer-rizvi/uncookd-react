import React from "react";
import { AccountContainer, AccountAuthDivider } from "./AccountStyled";
import { H1, Q } from "../Element";
import { description } from "../../../shared";
import { FormGenerator } from "../Form";

const AccountAuthTemplate = ({ title, schema: AccountAuthSchema }) => (
  <AccountContainer $align="center">
    <H1 $fontSize="quarter">{title}</H1>
    <AccountAuthDivider />
    <Q $fontStyle="italic" $fontSize="m">
      {"...to " + description.short}.
    </Q>
    <FormGenerator {...AccountAuthSchema} />
  </AccountContainer>
);

export default AccountAuthTemplate;
