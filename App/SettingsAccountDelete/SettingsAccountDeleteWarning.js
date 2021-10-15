import React from "react";
import styled from "styled-components";
import { Button, GrayBox, P } from "../Element";
import { request } from "../../utils";
import { logout } from "../../redux";

const StyledButton = styled(Button)`
  color: ${({ theme }) => theme.color.warning};
  display: block;
  margin-top: 20px;
  text-decoration: underline;
  font-size: ${({ theme }) => theme.fontSize.ml};
  width: 100%;
  text-align: left;
`;

const SettingsAccountDeleteWarning = ({ error, ...rest }) => (
  <GrayBox>
    <P>
      WARNING: There&apos;s absolutely NO coming back from this. This action is
      IRREVERSIBLE. By deleting your account, you will be deleting all of the
      data related to your account. This means if you have stories under this
      account, they WILL get deleted too... In fact, all of your comments and
      likes will be removed as well. It&apos;ll be like your account never
      existed! Please consider this action carefully...
    </P>
    <StyledButton
      name="delete_account"
      title="Delete account."
      onClick={() =>
        request({ method: "DELETE", url: "/user", onSuccess: logout, ...rest })
      }
    >
      {error
        ? "Failed to delete account - try again?"
        : `"I understand, I would like to delete my account."`}
    </StyledButton>
  </GrayBox>
);

export default SettingsAccountDeleteWarning;
