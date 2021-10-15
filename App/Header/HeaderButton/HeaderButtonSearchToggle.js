import React from "react";
import { Button } from "../../Element";

export const HeaderButtonSearchToggle = ({ id, searchToggleChange }) => (
  <Button
    name={`show_${id}_search`}
    title={`Show ${id} search input`}
    onClick={() => searchToggleChange && searchToggleChange(true)}
  >
    [s]
  </Button>
);
