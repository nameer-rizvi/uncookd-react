import React from "react";

export const Previous = ({
  ignoreTitle,
  title = "Previous icon",
  ...props
}) => (
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
      d="M112 352l-64-64 64-64"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="square"
      strokeMiterlimit="10"
      strokeWidth="32"
      d="M64 288h400V160"
    />
  </svg>
);
