import React from "react";

export const Ribbon = ({
  ignoreTitle,
  title = "Bookmark Ribbon icon",
  ...props
}) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 381.322 381.322"
    xmlSpace="preserve"
    className="bookmark"
    {...props}
  >
    {!ignoreTitle ? <title>{title}</title> : null}
    <path
      d="M296.582,6.053v369.21c0,2.376-1.383,4.516-3.534,5.503c-0.804,0.372-1.667,0.55-2.518,0.55
    c-1.419,0-2.838-0.503-3.961-1.472l-95.907-82.84l-95.912,82.84c-1.797,1.554-4.327,1.921-6.475,0.922
    c-2.148-0.987-3.535-3.127-3.535-5.503V6.053C84.741,2.704,87.445,0,90.793,0H290.53C293.875,0,296.582,2.704,296.582,6.053z"
    />
  </svg>
);
