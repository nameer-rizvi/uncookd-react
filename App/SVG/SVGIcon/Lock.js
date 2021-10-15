import React from "react";

export const Lock = ({ ignoreTitle, title = "Lock icon", ...props }) => (
  <svg
    viewBox="0 0 8 8"
    height="48"
    width="48"
    focusable="false"
    role="img"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {!ignoreTitle ? <title>{title}</title> : null}
    <path d="M4 0C2.9 0 2 .9 2 2v1H1v4h6V3H6V2c0-1.1-.9-2-2-2zm0 1c.56 0 1 .44 1 1v1H3V2c0-.56.44-1 1-1z" />
  </svg>
);
