import React from "react";
import { isNumber } from "simpul";
import { SubscribeButton } from "../Subscribe";

const HomeMetaSubscribeButton = ({ isDefault, value, subscription }) =>
  !isDefault && isNumber(subscription) ? (
    <SubscribeButton
      id="home-meta-subscribe"
      type="hashtag"
      hashtag={value}
      subscription={subscription}
    />
  ) : null;

export default HomeMetaSubscribeButton;
