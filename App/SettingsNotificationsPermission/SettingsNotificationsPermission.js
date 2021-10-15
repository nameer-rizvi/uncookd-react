// --flow-serviceWorker-notifications-4

import React from "react";
import getSettingsNotificationsPermissionConfig from "./SettingsNotificationsPermissionConfig";
import { FlexBox, H4_2, Span, P, Button } from "../Element";

function SettingsNotificationsPermission() {
  const { status, detail, button } = getSettingsNotificationsPermissionConfig();

  return (
    <FlexBox>
      <H4_2>
        push notifications:{" "}
        <Span style={{ textDecoration: "underline" }}>{status}</Span>
      </H4_2>
      <P>{detail}</P>
      <Button
        name="request_notifications_permission"
        title="Allow push notifications."
        children="Click here to allow this device to receive push notifications."
        style={{ textAlign: "left", width: "100%", margin: "10px 0 40px 0" }}
        $square
        {...button}
      />
    </FlexBox>
  );
}

export default SettingsNotificationsPermission;
