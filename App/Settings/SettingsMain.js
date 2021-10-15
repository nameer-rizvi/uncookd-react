import React from "react";
import { useSelector } from "react-redux";
import SettingsConfigs from "./SettingsConfigs";
import { setInitialValues, FormGenerator } from "../Form";
import { FlexBox } from "../Element";

function SettingsMain({ match: { url }, data }) {
  const user = useSelector((state) => state.user);

  const { schema } =
    SettingsConfigs.find((SettingsConfig) => SettingsConfig.to === url) || {};

  if (schema) {
    setInitialValues(schema, { ...user, ...data });

    return (
      <FlexBox id="settings-main">
        <FormGenerator {...schema} />
      </FlexBox>
    );
  } else return null;
}

export default SettingsMain;
