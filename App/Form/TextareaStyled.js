import styled from "styled-components";

export const textareaStyle = ({ theme }) => `
  font-size: ${theme.fontSize.ml};
  line-height: ${theme.lineHeight[1]};
  border: ${theme.border[1]};
  font-family: inherit;
  border-radius: 0;
  box-sizing: border-box;
  padding: 5px 15px;
  background-color: inherit;
  color: inherit;
  width: calc(100%);
`;

export const textareaSmallLabelStyle = ({ theme }) => `
  margin-top: 7px;
  background-color: ${theme.color.light[3]}
`;

export const StyledTextarea = styled.textarea(textareaStyle);
