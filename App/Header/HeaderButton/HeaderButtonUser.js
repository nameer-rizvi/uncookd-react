import React from "react";
import { ButtonResolver } from "../../Element";

export const HeaderButtonUser = ({ username }) => (
  <ButtonResolver
    resolve="user"
    style={{ maxWidth: 170 }}
    $overflow
    $hoverBorder
  >
    {username || "@me"}
  </ButtonResolver>
);
