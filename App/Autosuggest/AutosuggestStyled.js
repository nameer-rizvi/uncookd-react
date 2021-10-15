import styled from "styled-components";
import { FlexBox, UL_2, Button } from "../Element";

export const AutosuggestContainer = styled(FlexBox)`
  position: relative;
  flex: 1;
`;

export const AutosuggestListContainer = styled(FlexBox)`
  position: absolute;
  width: 100%;
  border-top: unset;
  border: ${({ theme }) => theme.border[1]};
  background-color: ${({ theme }) => theme.color.light[3]};
  top: ${({ $topPosition }) => $topPosition - 1 + "px"};
`;

export const AutosuggestListUL = styled(UL_2)`
  max-height: 175px;
  overflow: auto;
  li:not(:first-child) {
    border-top: ${({ theme }) => theme.border[2]};
  }
`;

export const AutosuggestListItemButton = styled(Button)`
  padding: 3px 7px;
  width: 100%;
  display: block;
  text-align: left;
  font-size: ${({ theme }) => theme.fontSize.m};
  ${({ theme }) => theme.preset.overflow}
  &:hover,
  &:focus,
  &:focus-within {
    background-color: ${({ theme }) => theme.color.light[4]} !important;
    text-decoration: underline;
  }
`;
