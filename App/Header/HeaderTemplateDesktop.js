import React from "react";
import HeaderStyledMain from "./HeaderStyledMain";
import { HeaderButtonHome } from "./HeaderButton";
import HeaderSearch from "./HeaderSearch";
import HeaderNavMain from "./HeaderNavMain";

const HeaderTemplateDesktop = () => (
  <HeaderStyledMain id="desktop">
    <HeaderButtonHome />
    <HeaderSearch id="desktop" />
    <HeaderNavMain id="desktop" />
  </HeaderStyledMain>
);

export default HeaderTemplateDesktop;
