import React from "react";
import { SVG, SVGSize } from "../Element";

const AccountVerifiedBadgeSVG = ({
  excludeBadge,
  replaceBadge,
  is_verified,
  badgeSize = "m",
  style,
  ...rest
}) =>
  !excludeBadge ? (
    <SVG
      name={
        replaceBadge
          ? replaceBadge
          : is_verified
          ? "verified_check2"
          : "question_octagon"
      }
      style={{
        marginRight: 6,
        minHeight: SVGSize[badgeSize].height,
        maxHeight: SVGSize[badgeSize].height,
        minWidth: SVGSize[badgeSize].width,
        maxWidth: SVGSize[badgeSize].width,
        ...style,
      }}
      {...rest}
    />
  ) : null;

export default AccountVerifiedBadgeSVG;
