import React from "react";
import { Button } from "../Element";
import { request } from "../../utils";
import { articleDelete } from "../../redux";

function ArticleErrorResolveButton({ index, id }) {
  const ButtonProps = {};

  ButtonProps.svg = "circle_minus";

  ButtonProps.title = "Resolve error.";

  ButtonProps.name = index + "_resolve";

  ButtonProps.onClick = () =>
    request({
      method: "DELETE",
      url: "/error",
      data: { id },
      onSuccess: () => articleDelete("error", id),
    });

  return <Button {...ButtonProps} />;
}

export default ArticleErrorResolveButton;
