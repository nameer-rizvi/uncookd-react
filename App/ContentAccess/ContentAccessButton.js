import React from "react";
import { useContentTypePropController } from "../../hooks";
import { Button } from "../Element";

function ContentAccessButton({ id, subscription, name }) {
  const controller = useContentTypePropController({
    type: "user",
    endpoint: "/user/subscription",
    paramName: "subscription_id",
    propName: "subscription",
    subscription,
    id,
  });

  const config = [
    {
      condition: controller.state === "is_private",
      status: "Click here to request a subscription to " + name,
      pending: "Sending subscription request to " + name,
      name: "content_subscription_request",
    },
    {
      condition: controller.state === "is_public",
      status: "Click here to subscribe to " + name,
      pending: "Subscribing to " + name,
      name: "content_subscription_subscribe",
    },
    {
      condition: controller.state && controller.state.endsWith("requested"),
      status: "A subscription request has been sent to " + name,
      name: "content_subscription_requested",
    },
    {
      condition: controller.state && controller.state.endsWith("subscribed"),
      status:
        "You are subscribed to " + name + " Refresh the page to view content.",
      name: "content_subscription_subscribed",
    },
  ].find((i) => i.condition);

  if (config) {
    const ButtonProps = {};

    ButtonProps.disabled = controller.pending;

    ButtonProps.title = config.status;

    ButtonProps.name = config.name;

    ButtonProps.onClick = () => config.pending && controller.post(); // "config.pending" === "subscription" is requestable

    ButtonProps.$underline = !controller.pending && config.pending;

    ButtonProps.style = {
      textAlign: "left",
      cursor: !config.pending || controller.pending ? "auto" : "",
    };

    ButtonProps.children =
      controller.pending && config.pending ? config.pending : config.status;

    return <Button {...ButtonProps} />;
  } else return null;
}

export default ContentAccessButton;
