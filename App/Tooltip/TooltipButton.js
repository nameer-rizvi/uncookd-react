import React, { useState, Fragment } from "react";
import TooltipButtonHashtag from "./TooltipButtonHashtagProps";
import TooltipButtonUser from "./TooltipButtonUserProps";
import { joinAttr } from "../../utils";
import { Button } from "../Element";
import TooltipButtonRequest from "./TooltipButtonRequest";

function TooltipButton({
  Template,
  children,
  plainTextOnly,
  disabled,
  excludeTooltip,
  id,
  ButtonProps = {},
  style = {},
  ...props
}) {
  const [hoverState, setHoverState] = useState({}); // Must be called before return statement...

  const TemplateResolver = { TooltipButtonHashtag, TooltipButtonUser };

  TemplateResolver[Template](props);

  if (!children) children = props.label || null;

  if (plainTextOnly || !props.isValid) return children;

  const primaryParamKey = props.api.paramKeys[0];

  const tooltipId =
    !disabled &&
    !excludeTooltip &&
    (id || joinAttr.id(["tooltip", primaryParamKey, props[primaryParamKey]]));

  const hover = {
    update: (update) => setHoverState((curr) => ({ ...curr, ...update })),
    show: Object.keys(hoverState).some((key) => hoverState[key]),
  };

  Object.assign(ButtonProps, {
    style,
    children,
    to: props.to,
    title: props.title,
    "data-tip": Boolean(tooltipId),
    "data-for": tooltipId,
    onMouseOver: () => hover.update({ button: true }),
    onMouseOut: () => hover.update({ button: false }),
    $hoverUnderline: true,
  });

  return (
    <Fragment>
      <Button {...ButtonProps} initialStyle />
      {Boolean(tooltipId) && hover.show ? (
        <TooltipButtonRequest id={tooltipId} hover={hover} {...props} />
      ) : null}
    </Fragment>
  );
}

export default TooltipButton;
