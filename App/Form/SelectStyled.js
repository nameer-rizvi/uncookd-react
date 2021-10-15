import styled from "styled-components";
import { SVG } from "../Element";

export const StyledSelectInput = styled.select`
  flex-grow: 1;
  font-weight: inherit;
  height: 35px;
  min-width: 170px;
  font-size: ${({ theme }) => theme.fontSize.ml};
  cursor: pointer;
  padding: 0 40px 0 12px;
  border: 0;
  border-bottom: ${({ theme }) => theme.border[1]};
  border-radius: 0;
  color: ${({ theme }) => theme.color.dark[3]};
  background-color: ${({ theme }) => theme.color.light[4]};
  font-family: inherit;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
`;

export const StyledSelectSVG = styled(SVG)`
  position: absolute;
  padding-right: 7px;
`;
