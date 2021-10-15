import React from "react";
import { joinAttr } from "../../utils";

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b

export const B = ({ className, ...rest }) => (
  <b className={joinAttr.className(["keywords", className])} {...rest} />
);
