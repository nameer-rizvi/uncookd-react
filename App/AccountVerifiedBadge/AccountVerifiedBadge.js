import React from "react";
import AccountVerifiedBadgeSVG from "./AccountVerifiedBadgeSVG";
import AccountVerifiedBadgeText from "./AccountVerifiedBadgeText";
import AccountVerifiedBadgeFull from "./AccountVerifiedBadgeFull";
import AccountVerifiedBadgeButton from "./AccountVerifiedBadgeButton";

const AccountVerifiedBadge = ({ excludeIfUnverified, content, ...rest }) =>
  rest.is_verified || (!excludeIfUnverified && !rest.is_verified) ? (
    content === "badge" ? (
      <AccountVerifiedBadgeSVG className="verified-badge" {...rest} />
    ) : content === "text" ? (
      <AccountVerifiedBadgeText className="verified-badge" {...rest} />
    ) : content === "full" ? (
      <AccountVerifiedBadgeFull className="verified-badge" {...rest} />
    ) : (
      <AccountVerifiedBadgeButton className="verified-badge" {...rest} />
    )
  ) : null;

export default AccountVerifiedBadge;
