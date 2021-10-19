import React from "react";
import styled from "styled-components";
import { Small } from "../Element";
import { dictionary } from "../../../shared";
import { isString } from "simpul";

const StyledSmall = styled(Small)`
  font-style: italic;
  margin-top: 5px;
`;

export const AsyncError = ({ error, ...rest }) =>
  error ? (
    <StyledSmall {...rest}>
      {error.toString().replace("Error: ", "")}
    </StyledSmall>
  ) : null;

export function Helper({ name, ...rest }) {
  const { helpers = [] } = dictionary.get(name);
  return helpers.filter(Boolean).map((helper, index) => (
    <StyledSmall key={index} {...rest}>
      {helper}
    </StyledSmall>
  ));
}

export const FieldInformation = ({ error, name, ...rest }) =>
  error ? (
    <AsyncError error={error} {...rest} />
  ) : (
    <Helper name={name} {...rest} />
  );

export function CharCount({ hide, name, value, ...rest }) {
  const { maxLength } = dictionary.get(name);
  if (!hide && maxLength) {
    const count = (isString(value) ? value.length : 0).toLocaleString();
    const label = [count, maxLength.toLocaleString()].join("/");
    return <StyledSmall {...rest}>{label}</StyledSmall>;
  } else return null;
}
