import React from "react";
import { useContentTypePropController } from "../../hooks";
import { isNumber } from "simpul";
import { sentenceCase } from "change-case";
import { RibbonContainer, RibbonStatus } from "./RibbonStyled";
import { Button } from "../Element";

function Ribbon({
  content_type,
  content_id,
  content_index,
  ribbon_name,
  ribbon_key,
  ribbon_is_selected,
  ribbon_style,
  author_content_access,
}) {
  const controllerConfig = {
    type: content_type,
    id: content_id,
    endpoint: `/${content_type}/${ribbon_name}`,
    paramName: content_type + "_id",
    propName: ribbon_key,
    [ribbon_key]: ribbon_is_selected,
    immediate: true,
  };

  const controller = useContentTypePropController(controllerConfig);

  if (author_content_access !== false && isNumber(ribbon_is_selected)) {
    const ContainerProps = {
      className: `${content_type}-${ribbon_name}-ribbon`,
      style: ribbon_style,
    };

    const verb = controller.state ? "un" + ribbon_name : ribbon_name;

    const ButtonProps = { svg: ribbon_name };

    ButtonProps.name = content_index + "_" + verb;

    ButtonProps.title = sentenceCase(`${verb} this ${content_type}`) + ".";

    ButtonProps.$disabled = !controller.state;

    ButtonProps.disabled = controller.pending;

    ButtonProps.onClick = controller.state
      ? controller.delete
      : controller.post;

    const isBookmark = ribbon_name === "bookmark";

    return (
      <RibbonContainer {...ContainerProps}>
        <Button {...ButtonProps} />
        {controller.state ? (
          <RibbonStatus name="checkmark" $isBookmark={isBookmark} />
        ) : null}
      </RibbonContainer>
    );
  } else return null;
}

export default Ribbon;
