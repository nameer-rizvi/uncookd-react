import React from "react";
import { FieldContainer, FieldCore } from "./FormStyled";
import { LabelRight } from "./Label";
import Range from "./Range";
import { FieldInformation } from "./Small";
import { assignId } from "../../utils";

const FormFieldRange = ({ key, label, error, ...rest }) => (
  <FieldContainer
    key={key}
    disabled={rest.disabled}
    className="range-container"
    style={{ marginBottom: "30px" }}
  >
    <LabelRight htmlFor={assignId(rest)}>{label || rest.name}</LabelRight>
    <FieldCore className="range-core" $justify="center">
      <Range {...rest} />
      <FieldInformation error={error} name={rest.name} />
    </FieldCore>
  </FieldContainer>
);

export default FormFieldRange;
