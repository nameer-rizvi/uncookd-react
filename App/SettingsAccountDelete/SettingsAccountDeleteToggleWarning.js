import React from "react";
import styled from "styled-components";
import { Button } from "../Element";

const StyledButton = styled(Button)`
  width: 200px;
  padding: 5px 0;
  margin: 20px 0;
  border: ${({ theme, $showWarning }) =>
    $showWarning ? theme.border[1] : theme.border[6]};
  color: ${({ theme, $showWarning }) =>
    !$showWarning ? theme.color.warning : ""};
  cursor: ${({ pending }) => (pending ? "auto" : "")};
`;

const SettingsAccountDeleteToggleWarning = ({
  toggleWarning,
  pending,
  ...rest
}) => (
  <StyledButton
    name="delete_account_toggle"
    title={(rest.$showWarning ? "Hide" : "Show") + " delete account warning."}
    onClick={toggleWarning}
    disabled={pending}
    {...rest}
  >
    {pending
      ? "DELETING ACCOUNT..."
      : rest.$showWarning
      ? "KEEP ACCOUNT"
      : "DELETE ACCOUNT"}
  </StyledButton>
);

export default SettingsAccountDeleteToggleWarning;
