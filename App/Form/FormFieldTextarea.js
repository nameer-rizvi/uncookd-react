import React from "react";
import styled from "styled-components";
import { CharCount, FieldInformation } from "./Small";
import { textareaSmallLabelStyle } from "./TextareaStyled";
import { FieldContainer, FieldCore } from "./FormStyled";
import { LabelTop, LabelRight } from "./Label";
import Textarea from "./Textarea";
import { assignId } from "../../utils";

const StyledCharCount = styled(CharCount)(textareaSmallLabelStyle);

const StyledFieldInformation = styled(FieldInformation)(
  textareaSmallLabelStyle
);

const FormFieldTextarea = ({
  key,
  $column,
  hideLabel,
  label,
  hideCharCount,
  error,
  ...rest
}) => (
  <FieldContainer
    key={key}
    disabled={rest.disabled}
    $column={$column}
    className="textarea-container"
  >
    {!hideLabel ? (
      $column ? (
        <LabelTop htmlFor={assignId(rest)}>{label || rest.name}</LabelTop>
      ) : (
        <LabelRight htmlFor={assignId(rest)}>{label || rest.name}</LabelRight>
      )
    ) : null}
    <FieldCore className="textarea-core">
      <Textarea {...rest} />
      <StyledCharCount
        hide={hideCharCount}
        name={rest.name}
        value={rest.value}
      />
      <StyledFieldInformation error={error} name={rest.name} />
    </FieldCore>
  </FieldContainer>
);

export default FormFieldTextarea;
