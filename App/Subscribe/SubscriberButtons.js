import React from "react";
import { useContentTypePropController } from "../../hooks";
import { Button } from "../Element";
import { makeName, makeTitle } from "./SubscribeButtonUtils";

function SubscriberButtons({ user_id, subscriber, name, ...rest }) {
  const controllerConfig = {
    type: "user",
    id: user_id,
    endpoint: "/user/subscriber",
    paramName: "subscriber_id",
    propName: "subscriber",
    subscriber,
  };

  const controller = useContentTypePropController(controllerConfig);

  if (controller.state) {
    const configs = [
      {
        condition: controller.state === "is_requested",
        svg: "circle_minus",
        name: "reject_subscriber",
        title: "Reject subscriber",
        method: "delete",
      },
      {
        condition: controller.state === "is_requested",
        svg: "circle_check",
        name: "accept_subscriber",
        title: "Accept subscriber",
        method: "put",
      },
      {
        condition: controller.state === "is_subscriber",
        svg: "circle_minus",
        name: "remove_subscriber",
        title: "Remove subscriber",
        method: "delete",
      },
    ].filter((config) => config.condition);

    return configs
      .map((config, index) => (
        <Button
          key={index}
          disabled={controller.pending}
          name={makeName(config.name, name)}
          title={makeTitle(config.title, name, null, " ")}
          svg={config.svg}
          onClick={controller[config.method]}
          {...rest}
        />
      ))
      .filter(Boolean);
  } else return null;
}

export default SubscriberButtons;
