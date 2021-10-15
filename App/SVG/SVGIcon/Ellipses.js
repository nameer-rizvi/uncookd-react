import React from "react";

export const Ellipses = ({
  ignoreTitle,
  title = "Ellipses icon",
  ...props
}) => (
  <svg
    viewBox="0 0 24 24"
    height="48"
    width="48"
    focusable="false"
    role="img"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {!ignoreTitle ? <title>{title}</title> : null}
    <g data-name="Layer 2">
      <g data-name="more-horizotnal">
        <circle cx="12" cy="12" r="2" />
        <circle cx="19" cy="12" r="2" />
        <circle cx="5" cy="12" r="2" />
      </g>
    </g>
  </svg>
);
