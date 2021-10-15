import React from "react";
import { isNumber, generalizedCount } from "simpul";
import { ButtonResolver, SpanCircle } from "../../Element";

export function HeaderButtonNotifications({
  count_notifications_new_total: total,
}) {
  const hasNotifications = isNumber(total) && total > 0;

  const label = hasNotifications ? "+" + generalizedCount(total) : "!";

  const $fontSize =
    label && label.length > 3
      ? "xxs"
      : label && label.length > 2
      ? "xs"
      : hasNotifications && "s";

  const SpanCircleProps = {
    $fontSize,
    $fill: hasNotifications,
    style: { paddingBottom: 2 },
  };

  return (
    <ButtonResolver resolve="notifications">
      <SpanCircle {...SpanCircleProps}>{label}</SpanCircle>
    </ButtonResolver>
  );
}
