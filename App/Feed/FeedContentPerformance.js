import React from "react";
import { isNumber, numberLabel } from "simpul";
import { Small } from "../Element";

const makeCountLabel = (count) => numberLabel(count, "results", "showAlt").full;

const makeSecondsLabel = (miliseconds) =>
  isNumber(miliseconds)
    ? ` in ${(miliseconds / 1000).toLocaleString()} seconds`
    : "";

const FeedContentPerformance = ({ count, performance }) =>
  isNumber(count) ? (
    <Small id="feed-performance" $fontStyle="italic">
      Found {makeCountLabel(count) + makeSecondsLabel(performance)}.
    </Small>
  ) : null;

export default FeedContentPerformance;
