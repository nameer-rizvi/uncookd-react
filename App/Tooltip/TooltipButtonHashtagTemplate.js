import React, { Fragment } from "react";
import { TooltipButton, TooltipHeader, TooltipTitle } from "./TooltipStyled";
import TooltipCountList from "./TooltipCountList";
import { isNumber } from "simpul";
import { SubscribeButton } from "../Subscribe";

const TooltipButtonHashtagTemplate = ({
  title,
  to,
  label,
  excludeSubscribeButton,
  hashtag,
  subscription,
  ...metadata
}) => (
  <Fragment>
    <TooltipButton title={title} to={to}>
      <TooltipHeader>
        <TooltipTitle>{label}</TooltipTitle>
      </TooltipHeader>
      <TooltipCountList {...metadata} />
    </TooltipButton>
    {!excludeSubscribeButton && isNumber(subscription) ? (
      <SubscribeButton
        type="hashtag"
        hashtag={hashtag}
        subscription={subscription}
        altLoader
      />
    ) : null}
  </Fragment>
);

export default TooltipButtonHashtagTemplate;
