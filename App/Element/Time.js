import React from "react";
import { isDate, dateformat } from "simpul";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Span } from "./Span";

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time

function getTo(datetime) {
  dayjs.extend(relativeTime);
  return dayjs().to(datetime);
}

export function Time({ datetime, format, event, ...TimeRest }) {
  if (isDate(datetime)) {
    const timeAttr = new Date(datetime).toLocaleDateString();

    const timeLabel =
      format === "to"
        ? getTo(datetime)
        : format === "full"
        ? dayjs(datetime).format("MMMM D, YYYY")
        : format
        ? dateformat(datetime, format)
        : datetime;

    const eventLabel = event && event.replace("_at", "").replace("_", " ");

    return eventLabel ? (
      <Span {...TimeRest}>
        {eventLabel} <time dateTime={timeAttr}>{timeLabel}</time>
      </Span>
    ) : (
      <time dateTime={timeAttr} {...TimeRest}>
        {timeLabel}
      </time>
    );
  } else return null;
}
