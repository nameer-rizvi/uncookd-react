import React from "react";

export const Draft = ({ ignoreTitle, title = "Draft icon", ...props }) => (
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
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M20 2a1 1 0 011 1v3.757l-2 2V4H5v16h14v-2.758l2-2V21a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1h16zm1.778 6.808l1.414 1.414L15.414 18l-1.416-.002.002-1.412 7.778-7.778zM13 12v2H8v-2h5zm3-4v2H8V8h8z" />
  </svg>
);
