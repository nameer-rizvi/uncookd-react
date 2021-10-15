import React from "react";
import SettingsConfigs from "./SettingsConfigs";
import SettingsStyled from "./SettingsStyled";
import SettingsMenu from "./SettingsMenu";
import SettingsMain from "./SettingsMain";

function Settings(props) {
  const SettingsConfigIndex = SettingsConfigs.findIndex(
    (SettingsConfig) => SettingsConfig.to === props.match.url
  );

  if (SettingsConfigIndex === -1) props.match.url = SettingsConfigs[0].to;

  return (
    <SettingsStyled>
      <SettingsMenu url={props.match.url} />
      <SettingsMain {...props} />
    </SettingsStyled>
  );
}

export default Settings;
