import React from "react";
import { FlexBox, Small } from "../Element";

const FooterSmall = (props) => (
  <FlexBox $justify="flex-end">
    <Small $light style={{ lineHeight: "14px" }} {...props} />
  </FlexBox>
);

export default FooterSmall;
