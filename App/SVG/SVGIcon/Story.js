import React from "react";

export const Story = ({ ignoreTitle, title = "Story icon", ...props }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 512 512"
    style={{ enableBackground: "new 0 0 512 512" }}
    xmlSpace="preserve"
    className="story"
    {...props}
  >
    {!ignoreTitle ? <title>{title}</title> : null}
    <path
      d="M308.364,75.636c-19.279,0-34.909,15.63-34.909,34.909v290.909c0-19.279,15.63-34.909,34.909-34.909h133.818V75.636
      H308.364z"
    />
    <path
      d="M203.636,75.636H69.818v290.909h133.818c19.279,0,34.909,15.63,34.909,34.909V110.545
      C238.545,91.266,222.915,75.636,203.636,75.636z"
    />
    <path d="M477.091,110.545v290.909H343.273c-19.279,0-34.909,15.63-34.909,34.909H512V110.545H477.091z" />
    <path d="M168.727,401.455H34.909V110.545H0v325.818h203.636C203.636,417.085,188.006,401.455,168.727,401.455z" />
  </svg>
);
