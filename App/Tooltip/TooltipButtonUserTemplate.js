import React, { Fragment } from "react";
import {
  TooltipButton,
  TooltipHeader,
  TooltipTitle,
  TooltipTime,
  TooltipText,
} from "./TooltipStyled";
import AccountVerifiedBadge from "../AccountVerifiedBadge";
import { label } from "../../../shared";
import TooltipCountList from "./TooltipCountList";
import { SubscribeButton } from "../Subscribe";

const TooltipButtonUserTemplate = ({
  title,
  to,
  content_access,
  is_verified,
  username,
  display_name,
  joined_at,
  bio,
  user_id,
  subscription,
  excludeSubscribeButton,
  ...metadata
}) => (
  <Fragment>
    <TooltipButton title={title} to={to}>
      <TooltipHeader>
        <TooltipTitle>
          <AccountVerifiedBadge
            content="full"
            is_verified={is_verified}
            svg={{
              badgeSize: "s",
              replaceBadge:
                content_access === false ? "lock" : !is_verified ? "user" : "",
            }}
            text={{ label: label.user({ username, display_name }) }}
          />
        </TooltipTitle>
        <TooltipTime format="full" event="Joined" datetime={joined_at} />
      </TooltipHeader>
      {bio ? (
        <TooltipText style={{ marginTop: 3, lineHeight: "16px" }}>
          {bio}
        </TooltipText>
      ) : null}
      <TooltipCountList {...metadata} />
    </TooltipButton>
    {!excludeSubscribeButton && subscription ? (
      <SubscribeButton
        type="user"
        user_id={user_id}
        subscription={subscription}
        name={{ username, display_name }}
        altLoader
      />
    ) : null}
  </Fragment>
);

export default TooltipButtonUserTemplate;
