import styled from "styled-components";

const InputStyled = styled.input`
  padding: 3px 15px;
  width: calc(100%);
  font-size: ${({ theme, $fontSize = "ml" }) => theme.fontSize[$fontSize]};
  font-family: inherit;
  color: inherit;
  outline: 0;
  background-color: inherit;
  box-sizing: border-box;
  border: none;
  -webkit-appearance: none;
  // height: fit-content;

  &:invalid + span.validation-status:after {
    position: absolute;
    padding: 3px 0 0 10px;
    content: "✖";
  }

  &:valid + span.validation-status:after {
    position: absolute;
    padding: 3px 0 0 10px;
    content: "✓";
  }
`;

export default InputStyled;
