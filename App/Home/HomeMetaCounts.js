import React from "react";
import { useToggleMulti } from "../../hooks";
import { numberLabel } from "simpul";
import { FlexBox, Button, SVG, SVGSize } from "../Element";

function HomeMetaCounts({ isDefault, value, title, pending, ...metadata }) {
  const toggle = useToggleMulti();

  const configs = [
    { key: "stories", svg: "story" },
    { key: isDefault ? "users" : "subscribers", svg: "users" },
  ];

  return (
    <FlexBox id="home-meta-counts">
      {configs.map(({ key, svg }) => {
        const toggleState = toggle.state(key);

        const format = toggleState ? "general" : "full";

        const ButtonProps = {};

        ButtonProps.key = key;

        ButtonProps.className = "home-meta-count";

        ButtonProps.name = `${value}_count_${format}_${key}`;

        ButtonProps.title = `Show ${format} number of ${key} for ${title}.`;

        ButtonProps.onClick = () => toggle.change(key);

        ButtonProps.$hoverUnderline = true;

        const count = metadata["count_" + key] || 0;

        const CountLabel = pending
          ? "..."
          : metadata
          ? numberLabel(count, key, toggleState).full
          : "";

        return (
          <Button {...ButtonProps}>
            <SVG name={svg} style={SVGSize.l} /> {CountLabel}
          </Button>
        );
      })}
    </FlexBox>
  );
}

export default HomeMetaCounts;
