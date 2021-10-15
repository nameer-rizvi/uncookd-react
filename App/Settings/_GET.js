import React from "react";
import GetComponent from "../GetComponent";
import Settings from "./Settings";

const SettingsGet = (props) => (
  <GetComponent
    persistData
    componentName="settings"
    Component={Settings}
    requestProps={{ url: "/user/settings" }}
    {...props}
  />
);

export default SettingsGet;
