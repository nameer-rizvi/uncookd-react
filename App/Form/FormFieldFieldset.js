import React from "react";
import styled from "styled-components";
import { snakeCase } from "change-case";
import FormGeneratorResolver from "./FormGeneratorResolver";

const StyledFieldset = styled.fieldset`
  border: ${({ theme }) => theme.border[5]};
  padding: 18px 20px 0 20px;
  margin-bottom: 25px;
`;

const StyledLegend = styled.legend`
  font-weight: bold;
`;

const FormFieldFieldset = ({ key, formId, name, legend, ...rest }) => (
  <StyledFieldset
    key={key}
    form={formId}
    name={name || snakeCase(legend)}
    disabled={rest.disabled}
  >
    <StyledLegend>{legend}</StyledLegend>
    <FormGeneratorResolver {...rest} />
  </StyledFieldset>
);

export default FormFieldFieldset;
