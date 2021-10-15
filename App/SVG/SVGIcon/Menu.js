import React from "react";

export const Menu = ({ ignoreTitle, title = "Menu icon", ...props }) => (
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
    <path d="M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z" />
  </svg>
);
