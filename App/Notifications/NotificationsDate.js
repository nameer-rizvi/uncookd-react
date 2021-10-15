import React from "react";
import { Span, Time } from "../Element";
import { fullDate } from "../../utils";
import { numberLabel } from "simpul";

const NotificationsDate = ({ count_new_total }) => (
  <Span id="notifications-date">
    <Time datetime={fullDate(undefined, { weekday: "long" })} />
    {count_new_total > 0
      ? ": " + numberLabel(count_new_total, "new notifications").full + "."
      : ""}
  </Span>
);

export default NotificationsDate;
