import React from "react";
import { FieldContainer, FieldCore } from "./FormStyled";
import { LabelRight } from "./Label";
import Select from "./Select";
import { FieldInformation } from "./Small";
import { assignId } from "../../utils";

const FormFieldSelect = ({ key, label, error, ...rest }) => (
  <FieldContainer
    key={key}
    disabled={rest.disabled}
    className="select-container"
  >
    <LabelRight htmlFor={assignId(rest)} style={{ paddingTop: "8px" }}>
      {label || rest.name}
    </LabelRight>
    <FieldCore className="select-core">
      <Select {...rest} />
      <FieldInformation error={error} name={rest.name} />
    </FieldCore>
  </FieldContainer>
);

export default FormFieldSelect;
