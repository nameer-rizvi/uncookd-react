import React from "react";

export const Ribbon2 = ({
  ignoreTitle,
  title = "Like Ribbon icon",
  ...props
}) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 63.101 63.101"
    xmlSpace="preserve"
    className="like"
    {...props}
  >
    {!ignoreTitle ? <title>{title}</title> : null}
    <path
      d="M52.274,20.208l-3.836-3.855l1.789-5.139l-5.135-1.802l-0.617-5.406l-5.408,0.596L36.162,0
    l-4.611,2.891L26.941,0l-2.903,4.602l-5.407-0.596l-0.62,5.405l-5.135,1.802l1.789,5.139l-3.838,3.856l3.838,3.857l-1.789,5.137
    l5.134,1.802l0.618,5.405l5.407-0.596L24.121,63.1l7.43-8.017l7.428,8.018l0.086-27.287l5.406,0.598l0.621-5.406l5.135-1.802
    l-1.789-5.139L52.274,20.208z M31.551,33.404c-7.275,0-13.195-5.919-13.195-13.195c0-7.275,5.92-13.195,13.195-13.195
    c7.276,0,13.196,5.92,13.196,13.195C44.746,27.484,38.826,33.404,31.551,33.404z M42.453,20.208
    c0,6.011-4.891,10.902-10.903,10.902c-6.011,0-10.902-4.891-10.902-10.902S25.54,9.306,31.55,9.306
    C37.563,9.306,42.453,14.197,42.453,20.208z"
    />
  </svg>
);
