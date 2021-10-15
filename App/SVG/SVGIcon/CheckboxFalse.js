import React from "react";

export const CheckboxFalse = ({
  ignoreTitle,
  title = "Checkbox False icon",
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
    <path fill="none" d="M0 0h24v24H0V0z" />
    <path d="M19 5v14H5V5h14m2-2H3v18h18V3z" />
  </svg>
);
