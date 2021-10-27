import React from "react";
import GetComponent from "../GetComponent";
import Settings from "./Settings";

const SettingsGet = (props) => (
  <GetComponent
    componentName="settings"
    Component={Settings}
    requestProps={{ url: "/user/settings" }}
    persistData
    {...props}
  />
);

export default SettingsGet;
