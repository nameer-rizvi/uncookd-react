import React from "react";
import { ButtonResolver, H1 } from "../../Element";
import { name } from "../../../../shared";

export const HeaderButtonHome = ({ short, closeNav }) => (
  <ButtonResolver
    resolve="home"
    className="home-button"
    onClick={() => closeNav && closeNav()}
  >
    <H1 $fontSize="xl">{short ? name.short : name.full}</H1>
  </ButtonResolver>
);
