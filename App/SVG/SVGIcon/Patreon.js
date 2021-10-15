import React from "react";

export const Patreon = ({ ignoreTitle, title = "Patreon icon", ...props }) => (
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
    <circle cx="14.508" cy="9.831" r="6.496" />
    <path d="M2.996 3.335H6.17v17.33H2.996z" />
  </svg>
);
