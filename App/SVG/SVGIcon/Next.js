import React from "react";

export const Next = ({ ignoreTitle, title = "Next icon", ...props }) => (
  <svg
    viewBox="0 0 512 512"
    height="48"
    width="48"
    focusable="false"
    role="img"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {!ignoreTitle ? <title>{title}</title> : null}
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="square"
      strokeMiterlimit="10"
      strokeWidth="32"
      d="M400 352l64-64-64-64"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="square"
      strokeMiterlimit="10"
      strokeWidth="32"
      d="M448 288H48V160"
    />
  </svg>
);
