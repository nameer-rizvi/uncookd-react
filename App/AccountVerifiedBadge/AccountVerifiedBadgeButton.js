import React from "react";
import { ButtonResolver } from "../Element";
import AccountVerifiedBadgeSVG from "./AccountVerifiedBadgeSVG";
import AccountVerifiedBadgeText from "./AccountVerifiedBadgeText";

const AccountVerifiedBadgeButton = ({
  className,
  button,
  is_verified,
  svg,
  text,
}) => (
  <ButtonResolver
    resolve="verified-account"
    className={className}
    $hoverUnderline
    {...button}
  >
    <AccountVerifiedBadgeSVG is_verified={is_verified} {...svg} />
    <AccountVerifiedBadgeText is_verified={is_verified} {...text} />
  </ButtonResolver>
);

export default AccountVerifiedBadgeButton;
