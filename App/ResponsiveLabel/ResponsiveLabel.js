import React, { useContext } from "react";
import { ViewportContext } from "../Viewport";
import ResponsiveLabelSVG from "./ResponsiveLabelSVG";
import ResponsiveLabelText from "./ResponsiveLabelText";

function ResponsiveLabel(props) {
  const { device } = useContext(ViewportContext);

  return props.svg && device === "mobile" ? (
    <ResponsiveLabelSVG {...props} />
  ) : (
    <ResponsiveLabelText {...props} />
  );
}

export default ResponsiveLabel;
