import React from "react";
import FooterSmall from "./FooterSmall";
import { description, name } from "../../../shared";

const FooterCopyright = () => (
  <FooterSmall style={{ marginTop: 5 }}>
    &copy; {description.startYear}-{new Date().getFullYear()}, {name.business}.
    All rights reserved.
  </FooterSmall>
);

export default FooterCopyright;
