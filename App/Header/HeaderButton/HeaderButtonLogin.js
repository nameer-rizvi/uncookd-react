import React from "react";
import { ButtonResolver } from "../../Element";

export const HeaderButtonLogin = ({ short }) => (
  <ButtonResolver resolve="login" $hoverBorder>
    {short ? "login" : "login & write"}
  </ButtonResolver>
);
