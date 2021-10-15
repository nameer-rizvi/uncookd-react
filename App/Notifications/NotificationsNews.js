import React from "react";
import { notifications } from "../../../shared";
import { numberLabel } from "simpul";
import { FlexBox, P, UL, LI, Button } from "../Element";

function NotificationsNews({ count_notifications_new, updateList }) {
  const newActivityItems = notifications.account
    .map(({ count_alias, label_activity, key }) => {
      const count = count_notifications_new[count_alias];

      const blurb = numberLabel(count, "new " + label_activity).full + ".";

      return count > 0
        ? {
            $underline: true,
            name: "show_" + key,
            title: "See " + blurb,
            onClick: () => updateList(key),
            children: blurb,
          }
        : null;
    })
    .filter(Boolean);

  return newActivityItems.length ? (
    <FlexBox id="notifications-news">
      <P>Latest activity on your account:</P>
      <UL>
        {newActivityItems.map((newActivityItem, index) => (
          <LI key={index}>
            <Button {...newActivityItem} />
          </LI>
        ))}
      </UL>
    </FlexBox>
  ) : (
    <P id="notifications-news">
      No new notifications to report! Hooray for no clutter!
    </P>
  );
}

export default NotificationsNews;
