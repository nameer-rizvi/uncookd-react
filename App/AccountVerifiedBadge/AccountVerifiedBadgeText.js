import React from "react";
import styled from "styled-components";
import { Span } from "../Element";

const StyledSpan = styled(Span)`
  font-size: ${({ theme, $fontSize = "m" }) => theme.fontSize[$fontSize]};
`;

const AccountVerifiedBadgeText = ({ is_verified, label, ...rest }) => (
  <StyledSpan {...rest}>
    {label ? label : is_verified ? "Verified account." : "Unverified account."}
  </StyledSpan>
);

export default AccountVerifiedBadgeText;
