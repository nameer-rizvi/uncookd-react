import React, { useContext } from "react";
import { ViewportContext } from "../Viewport";
import { SelectLink } from "../Form";
import { Nav, Button } from "../Element";
import SettingsConfigs from "./SettingsConfigs";

function SettingsMenu({ url }) {
  const { breakpointIndex } = useContext(ViewportContext);

  return breakpointIndex <= 6 ? (
    <SelectLink
      containerId="settings-mobile-menu"
      name="settings_mobile_menu"
      options={SettingsConfigs}
      url={url}
    />
  ) : (
    <Nav
      id="settings-desktop-menu"
      ul="UL_2"
      items={SettingsConfigs.map((SettingsConfig, index) => (
        <Button
          key={index}
          to={SettingsConfig.to}
          title={`Go to ${SettingsConfig.label} settings page.`}
          children={SettingsConfig.label}
          isActive={() => url === SettingsConfig.to}
          $justify="start"
          $tabLight
          navLink
        />
      ))}
    />
  );
}

export default SettingsMenu;
