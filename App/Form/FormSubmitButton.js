import React from "react";
import { Button } from "../Element";

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/submit

const FormSubmitButton = ({
  setOnSubmitConfig,
  onSubmit,
  label = "submit",
  ...rest
}) => (
  <Button
    type="submit"
    onClick={() => setOnSubmitConfig(onSubmit)}
    style={{ margin: "15px 0" }}
    $square
    {...rest}
  >
    {label}
  </Button>
);

export default FormSubmitButton;
