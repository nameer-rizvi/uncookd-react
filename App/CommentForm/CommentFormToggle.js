import React from "react";
import { useToggle } from "../../hooks";
import { Button } from "../Element";

function useCommentFormToggle(type, initialToggleState = false) {
  const toggle = useToggle(initialToggleState);

  const ButtonProps = toggle.state
    ? {
        name: `close_${type}_form`,
        title: `Click here to close the ${type} form.`,
        children: `Click here to close the ${type} form.`,
        onClick: toggle.change,
      }
    : {
        name: `open_${type}_form`,
        title: `Click here to open the ${type} form.`,
        children: `Click here to post a ${type}.`,
        onClick: toggle.change,
      };

  const ToggleButton = (
    <Button className="comment-form-toggle" {...ButtonProps} />
  );

  return { toggle, ToggleButton };
}

export default useCommentFormToggle;
