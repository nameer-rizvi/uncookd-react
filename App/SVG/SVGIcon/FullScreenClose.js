import React from "react";

export const FullScreenClose = ({
  ignoreTitle,
  title = "Full Screen CLOSE icon",
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
    <path d="M10 4H8v4H4v2h6zM8 20h2v-6H4v2h4zm12-6h-6v6h2v-4h4zm0-6h-4V4h-2v6h6z" />
  </svg>
);
