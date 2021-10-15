import React, { useContext, Fragment } from "react";
import { useRouteProperties } from "../../hooks";
import { ViewportContext } from "../Viewport";
import HeaderSkipLinks from "./HeaderSkipLinks";
import HeaderTemplateDesktop from "./HeaderTemplateDesktop";
import HeaderTemplateTablet from "./HeaderTemplateTablet";
import HeaderTemplateMobile from "./HeaderTemplateMobile";

function Header() {
  const { isPage, hasFeed } = useRouteProperties();

  const { device } = useContext(ViewportContext);

  return !isPage ? (
    <Fragment>
      <HeaderSkipLinks device={device} hasFeed={hasFeed} />
      {device === "desktop" ? (
        <HeaderTemplateDesktop />
      ) : device === "tablet" ? (
        <HeaderTemplateTablet />
      ) : (
        <HeaderTemplateMobile />
      )}
    </Fragment>
  ) : null;
}

export default Header;
