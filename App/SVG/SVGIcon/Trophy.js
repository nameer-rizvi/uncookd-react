import React from "react";

const Trophy = ({ ignoreTitle, title = "Trophy icon", ...props }) => (
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
    <path
      fill="none"
      d="M18 6v6.83c1.784-.752 2-3.531 2-4.83V6h-2zM6 12.021V6H4v2c0 1.299.216 4.078 2 4.83v-.809z"
    />
    <path d="M21 4h-3V3a1 1 0 00-1-1H7a1 1 0 00-1 1v1H3a1 1 0 00-1 1v3c0 4.31 1.799 6.91 4.819 7.012A6.001 6.001 0 0011 17.91V20H9v2h6v-2h-2v-2.09a6.01 6.01 0 004.181-2.898C20.201 14.91 22 12.31 22 8V5a1 1 0 00-1-1zM4 8V6h2v6.83C4.216 12.078 4 9.299 4 8zm14 4.83V6h2v2c0 1.299-.216 4.078-2 4.83z" />
  </svg>
);

export default Trophy;