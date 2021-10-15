import React from "react";
import { FieldContainer, FieldCore } from "./FormStyled";
import Checkbox from "./Checkbox";
import { Label } from "./Label";
import { FieldInformation } from "./Small";
import { assignId } from "../../utils";

const FormFieldCheckbox = ({ key, label, error, $alignLabel, ...rest }) => (
  <FieldContainer
    key={key}
    disabled={rest.disabled}
    className="checkbox-container"
  >
    <Checkbox {...rest} />
    <FieldCore className="checkbox-core" style={{ paddingLeft: "20px" }}>
      <Label
        htmlFor={assignId(rest)}
        style={{ cursor: "pointer", paddingTop: $alignLabel ? "3px" : "" }}
      >
        {label || rest.name}
      </Label>
      <FieldInformation error={error} name={rest.name} />
    </FieldCore>
  </FieldContainer>
);

export default FormFieldCheckbox;
