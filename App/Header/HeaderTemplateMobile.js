import React, { Fragment } from "react";
import { useToggleMulti } from "../../hooks";
import {
  HeaderStyledMobileTop,
  HeaderStyledMobileBottom,
} from "./HeaderStyledMobile";
import HeaderNavMobile from "./HeaderNavMobile";
import { HeaderButtonHome } from "./HeaderButton";
import { ThemeModeSetButton } from "../Theme";
import HeaderSearch from "./HeaderSearch";
import HeaderNavMain from "./HeaderNavMain";

function HeaderTemplateMobile() {
  const toggleHook = useToggleMulti();

  const navIsOpen = toggleHook.state("nav");

  const openNav = () => !toggleHook.state("nav") && toggleHook.change("nav");

  const closeNav = () => toggleHook.state("nav") && toggleHook.change("nav");

  const searchIsOpen = toggleHook.state("search");

  const openSearch = () =>
    !toggleHook.state("search") && toggleHook.change("search");

  const closeSearch = () =>
    toggleHook.state("search") && toggleHook.change("search");

  return (
    <Fragment>
      <HeaderStyledMobileTop id="mobile-header-top">
        <HeaderNavMobile
          navIsOpen={navIsOpen}
          openNav={openNav}
          closeNav={closeNav}
        />
        <HeaderButtonHome closeNav={closeNav} />
        <ThemeModeSetButton />
      </HeaderStyledMobileTop>
      <HeaderStyledMobileBottom id="mobile-header-bottom" onClick={closeNav}>
        {searchIsOpen ? (
          <HeaderSearch
            id="mobile"
            searchToggleChange={closeSearch}
            style={{ padding: "0 10px 0 5px" }}
            hideAutosuggest
          />
        ) : (
          <HeaderNavMain id="mobile" searchToggleChange={openSearch} />
        )}
      </HeaderStyledMobileBottom>
    </Fragment>
  );
}

export default HeaderTemplateMobile;
