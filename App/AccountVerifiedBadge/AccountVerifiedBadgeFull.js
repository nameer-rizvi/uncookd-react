import React from "react";
import styled from "styled-components";
import { Span } from "../Element";
import AccountVerifiedBadgeSVG from "./AccountVerifiedBadgeSVG";
import AccountVerifiedBadgeText from "./AccountVerifiedBadgeText";

const StyledSpan = styled(Span)`
  display: flex;
  align-items: center;
`;

const AccountVerifiedBadgeFull = ({
  className,
  span,
  is_verified,
  svg,
  text,
}) => (
  <StyledSpan className={className} {...span}>
    <AccountVerifiedBadgeSVG is_verified={is_verified} {...svg} />
    <AccountVerifiedBadgeText is_verified={is_verified} {...text} />
  </StyledSpan>
);

export default AccountVerifiedBadgeFull;
