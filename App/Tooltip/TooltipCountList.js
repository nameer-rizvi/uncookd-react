import React from "react";
import { isNumber, numberLabel } from "simpul";
import { UL_2, SVG } from "../Element";
import { TooltipListItem, TooltipText } from "./TooltipStyled";

const TooltipCountListConfigs = [
  {
    key: "count_stories",
    svg: "story",
    label: "stories",
  },
  {
    key: "count_subscribers",
    svg: "users",
    label: "subscribers",
  },
];

function TooltipCountList(metadata) {
  const count = Object.keys(metadata).reduce(
    (reducer, metadataKey) =>
      metadataKey.startsWith("count")
        ? { ...reducer, [metadataKey]: metadata[metadataKey] }
        : reducer,
    {}
  );

  const countKeys = Object.keys(count);

  const showList = countKeys.some((countKey) => isNumber(count[countKey]));

  return showList ? (
    <UL_2>
      {countKeys.map((countKey) => {
        const config = TooltipCountListConfigs.find(
          (config) => config.key === countKey
        );

        return config ? (
          <TooltipListItem key={countKey}>
            <SVG name={config.svg} />
            <TooltipText>
              {numberLabel(count[countKey], config.label).full}
            </TooltipText>
          </TooltipListItem>
        ) : null;
      })}
    </UL_2>
  ) : null;
}

export default TooltipCountList;
