import React from "react";
import { FieldContainer, FieldCore } from "./FormStyled";
import { LabelRight } from "./Label";
import { InputWithBorder } from "./Input";
import { FieldInformation } from "./Small";
import { assignId } from "../../utils";

const FormFieldInput = ({ key, label, error, ...rest }) => (
  <FieldContainer
    key={key}
    disabled={rest.disabled}
    className="input-container"
    $align="center"
  >
    <LabelRight htmlFor={assignId(rest)}>{label || rest.name}</LabelRight>
    <FieldCore
      className="input-core"
      $row={rest.required}
      style={{ paddingRight: rest.required ? "15px" : "" }}
    >
      <InputWithBorder {...rest} />
      <FieldInformation
        error={error}
        name={rest.name}
        style={{ position: "absolute", marginTop: "29px" }}
      />
    </FieldCore>
  </FieldContainer>
);

export default FormFieldInput;
