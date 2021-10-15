import React from "react";
import { FlexBox, Button, SpanCircle, SVG, SVGSize } from "../Element";
import { capitalize } from "simpul";

const HomeMetaDetailButtons = ({ configs, toggle }) => (
  <FlexBox id="home-meta-detail-buttons" $row>
    {configs.map(({ name }) => {
      const currentState = toggle.state(name);

      const action = currentState ? "hide" : "show";

      const ButtonProps = {};

      ButtonProps.key = name;

      ButtonProps.className = "home-meta-detail-button";

      ButtonProps.name = action + "_" + name + "_section";

      ButtonProps.title = capitalize(action) + " " + name + " section.";

      ButtonProps.onClick = () => toggle.change(name);

      return (
        <Button {...ButtonProps}>
          <SpanCircle $fill={currentState}>
            <SVG name={name} style={SVGSize.s} />
          </SpanCircle>
        </Button>
      );
    })}
  </FlexBox>
);

export default HomeMetaDetailButtons;
