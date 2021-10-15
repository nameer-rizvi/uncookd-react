import React from "react";
import { snakeCase } from "change-case";
import { FlexBox } from "../Element";
import PillTray from "../PillTray";
import PillSelectorAutosuggest from "./PillSelectorAutosuggest";

function PillSelector({ pill: pillLabel, ...rest }) {
  const PillTrayProps = {
    svg: "close",
    disabled: rest.disabled,
    items: rest.value,
    label: pillLabel,
  };

  PillTrayProps.title = (item) => `Remove ${PillTrayProps.label(item)}.`;

  PillTrayProps.name = ({ item, index }) =>
    snakeCase([index, "remove", rest.valueKey, item].join(" "));

  PillTrayProps.onClick = ({ item: removeItem }) =>
    rest.onChange(rest.value.filter((currItem) => currItem !== removeItem));

  return (
    <FlexBox className="pill-selector">
      <PillTray {...PillTrayProps} />
      <PillSelectorAutosuggest {...rest} />
    </FlexBox>
  );
}

export default PillSelector;
