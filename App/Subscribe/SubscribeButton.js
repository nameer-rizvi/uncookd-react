import React, { useMemo } from "react";
import { useToggle, useContentTypePropController } from "../../hooks";
import SubscribeButtonConfigs from "./SubscribeButtonConfigs";
import { joinAttr } from "../../utils";
import Loader from "../Loader";
import SubscribeButtonStyled from "./SubscribeButtonStyled";

function SubscribeButton({
  type,
  hashtag,
  user_id,
  name,
  className,
  style,
  altLoader,
  id: ButtonId = "",
  ...data
}) {
  const toggle = useToggle();

  const controllerConfig =
    type === "hashtag"
      ? {
          type,
          id: hashtag,
          endpoint: "/hashtag/subscription",
          paramName: "hashtag",
          propName: "subscription",
          ...data,
        }
      : type === "user"
      ? {
          type,
          id: user_id,
          endpoint: "/user/subscription",
          paramName: "subscription_id",
          propName: "subscription",
          ...data,
        }
      : undefined;

  const controller = useContentTypePropController(controllerConfig);

  return useMemo(() => {
    if (controller.state !== "is_user") {
      const ButtonConfigs = SubscribeButtonConfigs(name, hashtag);

      const ButtonConfigFinder = (c) =>
        c.type === type && c.subscription === controller.state;

      const ButtonConfig = controller.isLoggedIn
        ? ButtonConfigs.find(ButtonConfigFinder)
        : ButtonConfigs[0];

      const ButtonProps = {
        id: ButtonId,
        disabled: controller.pending,
        name: ButtonConfig.name,
        title: ButtonConfig.title,
        className: joinAttr.className(["subscribe", className]),
        style,
      };

      if (controller.pending) {
        ButtonProps.children = <Loader alt={altLoader} />;
        return <SubscribeButtonStyled {...ButtonProps} />;
      } else {
        ButtonProps.onMouseOver = () => toggle.change(true);

        ButtonProps.onMouseOut = () => toggle.change(false);

        ButtonProps.onClick = () => controller[ButtonConfig.action]();

        ButtonProps.children =
          ButtonConfig.hoverLabel && toggle.state
            ? ButtonConfig.hoverLabel
            : ButtonConfig.label || "subscribe";

        return <SubscribeButtonStyled {...ButtonProps} />;
      }
    } else return null;
  }, [controller, toggle.state]); // eslint-disable-line react-hooks/exhaustive-deps
}

export default SubscribeButton;
