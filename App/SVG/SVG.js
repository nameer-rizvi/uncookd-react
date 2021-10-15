import React, { Fragment } from "react";
import SVGResolver from "./SVGResolver";
import { SpanHiddenText } from "../Element";

function SVG({ name, hiddenText, ...rest }) {
  const SVGIcon = SVGResolver[name];

  if (SVGIcon && SVGIcon.Component) {
    const { title } = rest;

    if (hiddenText && title) {
      const dupeTitleWarning = `SVG with title '${title}' has a 'title' prop and a 'hiddenText' prop. Please choose only one.`;
      console.warn(dupeTitleWarning);
    }

    const combined = { ...SVGIcon.props, ...rest };

    combined.style = { ...SVGIcon.props.style, ...rest.style };

    return (
      <Fragment>
        <SVGIcon.Component {...combined} />
        {hiddenText ? <SpanHiddenText>{hiddenText}</SpanHiddenText> : null}
      </Fragment>
    );
  } else {
    console.warn(`SVG not found: ${name}.`);
    return "[SVG::" + name + "]";
  }
}

export default SVG;
