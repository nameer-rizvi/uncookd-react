import React, { Fragment } from "react";
import { SVG, Span } from "../Element";

const PillTrayItemContent = ({ svg, label }) => (
  <Fragment>
    {svg ? <SVG name={svg} className="pill-tray-item-svg" /> : null}
    <Span style={{ textAlign: "initial" }}>{label}</Span>
  </Fragment>
);

export default PillTrayItemContent;
