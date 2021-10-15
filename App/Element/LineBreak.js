import React from "react";

// NOTE: Do not use <br> to create margins between paragraphs;
//       wrap them in <p> elements and use the CSS margin property
//       to control their size.
//
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br

export const LineBreak = ({ breaks = 1, ...rest }) => {
  let arr = [];

  for (let num = 0; num < breaks; num++) {
    arr.push(<br key={num} {...rest} />);
  }

  return arr.map((lineBreak) => lineBreak);
};
