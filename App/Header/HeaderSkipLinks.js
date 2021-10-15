import React from "react";
import { ButtonResolver } from "../Element";

const HeaderSkipLinks = ({ device, hasFeed }) =>
  device !== "mobile"
    ? [
        {
          show: true,
          resolve: "skip_to_main",
        },
        {
          show: hasFeed,
          resolve: "skip_to_feed",
        },
        {
          show: !hasFeed,
          resolve: "skip_to_footer",
        },
      ].map((skip, index) =>
        skip.show ? (
          <ButtonResolver
            key={index}
            resolve={skip.resolve}
            style={{ position: "absolute", zIndex: 3 }} // zIndex === ThemeConfig.zIndex.mobileHeader + 1
          />
        ) : null
      )
    : null;

export default HeaderSkipLinks;
