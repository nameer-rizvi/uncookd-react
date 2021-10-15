import React from "react";
import HeaderNavMainStyled from "./HeaderNavMainStyled";
import { useSelector } from "react-redux";
import {
  HeaderButtonUser,
  HeaderButtonSearchToggle,
  HeaderButtonWrite,
  HeaderButtonNotifications,
  HeaderButtonSettings,
  HeaderButtonLogin,
  HeaderButtonSignup,
} from "./HeaderButton";
import { ThemeModeSetButton } from "../Theme";

function HeaderNavMain({ id, searchToggleChange }) {
  const isDesktop = id === "desktop";

  const isMobile = id === "mobile";

  const { username, count_notifications_new_total } = useSelector(
    (state) => state.user
  );

  const conditionalUserButton = username && (
    <HeaderButtonUser key="1" username={isDesktop && username} />
  );

  const conditionalSearchToggle = searchToggleChange && (
    <HeaderButtonSearchToggle
      key="2"
      id={id}
      searchToggleChange={searchToggleChange}
    />
  );

  const conditionalLinks = username
    ? [
        <HeaderButtonWrite key="3" short={!isDesktop} />,
        <HeaderButtonNotifications
          key="4"
          count_notifications_new_total={count_notifications_new_total}
        />,
        <HeaderButtonSettings key="5" />,
      ]
    : [
        <HeaderButtonLogin key="6" short={!isDesktop} />,
        <HeaderButtonSignup key="7" />,
      ];

  const conditionalThemeButton = !isMobile && <ThemeModeSetButton key="8" />;

  return (
    <HeaderNavMainStyled
      ul="UL_3"
      li="LI_2"
      $isMobile={isMobile}
      items={[
        conditionalUserButton,
        conditionalSearchToggle,
        ...conditionalLinks,
        conditionalThemeButton,
      ]}
    />
  );
}

export default HeaderNavMain;
