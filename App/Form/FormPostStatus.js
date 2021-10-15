import React from "react";
import { P } from "../Element";
import { joinAttr, parseErrorString } from "../../utils";
import { FormSmallLabelStyle } from "./FormStyled";

const FormPostStatus = ({ postStatus, className, ...rest }) =>
  postStatus ? (
    <P
      className={joinAttr.className(["post-status", className])}
      $fontStyle="italic"
      {...FormSmallLabelStyle}
      {...rest}
    >
      {parseErrorString(postStatus)}
    </P>
  ) : null;

export default FormPostStatus;
