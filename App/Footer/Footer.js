import React, { useContext } from "react";
import { ViewportContext } from "../Viewport";
import { useRouteProperties } from "../../hooks";
import { FooterContainer } from "./FooterStyled";
import { elementId } from "../../../shared";
import FooterNav from "./FooterNav";
import FooterCopyright from "./FooterCopyright";

function Footer() {
  const { device } = useContext(ViewportContext);

  const { isPage, hasFeed } = useRouteProperties();

  return device !== "mobile" && !isPage && !hasFeed ? (
    <FooterContainer role="contentinfo" id={elementId.footer}>
      <FooterNav />
      <FooterCopyright />
    </FooterContainer>
  ) : null;
}

export default Footer;
