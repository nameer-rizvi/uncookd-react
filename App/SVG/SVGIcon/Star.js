import React from "react";

const Star = ({ ignoreTitle, title = "Star icon", ...props }) => (
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
    <path d="M4 0L3 3H0l2.5 2-1 3L4 6l2.5 2-1-3L8 3H5L4 0z" />
  </svg>
);

export default Star;
