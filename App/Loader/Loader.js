import React from "react";
import LoaderStyled from "./LoaderStyled";
import { joinAttr } from "../../utils";

const Loader = ({ alt, className, ...rest }) => (
  <LoaderStyled $flex1 className={className}>
    <div
      className={joinAttr.className(["lds-ellipsis", alt && "alt"])}
      {...rest}
    >
      <div />
      <div />
      <div />
      <div />
    </div>
  </LoaderStyled>
);

export default Loader;
