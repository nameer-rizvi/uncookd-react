import React from "react";
import { useToggle } from "../../hooks";
import HeaderStyledMain from "./HeaderStyledMain";
import { HeaderButtonHome } from "./HeaderButton";
import HeaderSearch from "./HeaderSearch";
import HeaderNavMain from "./HeaderNavMain";

function HeaderTemplateTablet() {
  const searchToggle = useToggle();

  return (
    <HeaderStyledMain id="tablet">
      <HeaderButtonHome short />
      {searchToggle.state ? (
        <HeaderSearch id="tablet" searchToggleChange={searchToggle.change} />
      ) : (
        <HeaderNavMain id="tablet" searchToggleChange={searchToggle.change} />
      )}
    </HeaderStyledMain>
  );
}

export default HeaderTemplateTablet;
