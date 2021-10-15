import React from "react";

export const CaretDown = ({
  ignoreTitle,
  title = "Caret Down icon",
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
    <path d="M11.998 17l7-8h-14z" />
  </svg>
);
