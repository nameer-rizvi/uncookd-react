import React from "react";
import { ButtonResolver } from "../Element";
import { FormSmallLabelStyle } from "./FormStyled";

const FormButtonResolver = (props) => (
  <ButtonResolver {...FormSmallLabelStyle} {...props} />
);

export default FormButtonResolver;
