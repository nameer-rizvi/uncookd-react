import React from "react";
import { assignId } from "../../utils";
import { FlexBox } from "../Element";
import { StyledSelectInput, StyledSelectSVG } from "./SelectStyled";
import SelectOptions from "./SelectOptions";

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select

function Select({ containerId = "", options, ...rest }) {
  assignId(rest);

  return (
    <FlexBox id={containerId} $align="center" $justify="flex-end" $row>
      <StyledSelectInput {...rest}>
        <SelectOptions options={options} />
      </StyledSelectInput>
      <StyledSelectSVG name="caret_down" />
    </FlexBox>
  );
}

export default Select;
