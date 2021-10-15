import React from "react";
import { ButtonResolver } from "../../Element";

export const HeaderButtonWrite = ({ short }) => (
  <ButtonResolver resolve="write" $square>
    {short ? "w" : "write"}
  </ButtonResolver>
);
