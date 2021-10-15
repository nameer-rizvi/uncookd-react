import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { capitalize } from "simpul";
import { SiteLink } from "../Site";
import { Button, Nav, ButtonResolver } from "../Element";
import { ModalMobile } from "../Modal";

function HeaderNavMobile({ closeNav, navIsOpen, openNav }) {
  const { pathname } = useSelector((state) => state.router.location);

  const { isLoggedIn } = useSelector((state) => state.user);

  const makeToggleButtonProps = (action, onClick, svg) => ({
    svg: svg || action,
    name: action + "_mobile_site_menu",
    title: capitalize(action) + " mobile site menu.",
    onClick,
  });

  const makeNavLinkProps = (link, index) => ({
    key: index,
    resolve: link,
    onClick: closeNav,
    className:
      (pathname === `/site/${link}` || pathname === `/site/${link}/`) &&
      "active",
    $justify: "start",
    $tabLight: true,
    $underline: true,
  });

  return navIsOpen ? (
    <Fragment>
      <Button {...makeToggleButtonProps("close", closeNav)} />
      <ModalMobile style={{ padding: "20px 0" }}>
        <Nav
          id="site-nav-mobile"
          ul="UL_2"
          items={SiteLink.array(isLoggedIn).map(
            (link, index) =>
              link && (
                <ButtonResolver {...makeNavLinkProps(link, index)}>
                  {SiteLink.label(link)}
                </ButtonResolver>
              )
          )}
        />
      </ModalMobile>
    </Fragment>
  ) : (
    <Button {...makeToggleButtonProps("open", openNav, "menu")} />
  );
}

export default HeaderNavMobile;
