import React from "react";

export const NewRelease = ({
  ignoreTitle,
  title = "New Release icon",
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
    <rect width="24" height="24" fill="none" />
    <path d="M22.42 11.34l-1.86-2.13.26-2.82c.05-.5-.29-.96-.77-1.07l-2.76-.62-1.44-2.44c-.26-.43-.79-.61-1.26-.41L12 2.96 9.41 1.85c-.46-.2-1-.02-1.25.41L6.71 4.69l-2.75.62c-.49.11-.83.56-.78 1.06l.26 2.83-1.87 2.14c-.33.38-.33.94 0 1.32l1.87 2.13-.26 2.83c-.05.5.29.96.77 1.07l2.76.63 1.44 2.43c.26.43.8.61 1.26.41L12 21.03l2.59 1.11c.46.2 1 .02 1.25-.41l1.44-2.43 2.76-.63c.49-.11.82-.57.77-1.07l-.26-2.82 1.86-2.13a.98.98 0 00.01-1.31zM11.67 17c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm1-5c0 .55-.45 1-1 1s-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4z" />
  </svg>
);
