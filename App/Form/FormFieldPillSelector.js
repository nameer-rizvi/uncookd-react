import React from "react";
import { FieldContainer, FieldCore } from "./FormStyled";
import { LabelRight } from "./Label";
import { assignId } from "../../utils";
import PillSelector from "./PillSelector";
import { FieldInformation } from "./Small";

const FormFieldPillSelector = ({ key, label, error, ...rest }) => (
  <FieldContainer
    key={key}
    disabled={rest.disabled}
    className="pill-selector-container"
  >
    <LabelRight htmlFor={assignId(rest)}>{label || rest.name}</LabelRight>
    <FieldCore className="pill-selector-core">
      <PillSelector {...rest} />
      <FieldInformation error={error} name={rest.name} />
    </FieldCore>
  </FieldContainer>
);

export default FormFieldPillSelector;
