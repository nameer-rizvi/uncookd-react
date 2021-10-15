import styled from "styled-components";

const RangeStyled = styled.input`
  padding: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  height: 15px;
  border-radius: 5px;
  background: ${({ theme }) => theme.color.dark[2]};
  outline: none;
  cursor: pointer;
  border-bottom: unset;
  height: 1px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    background: ${({ theme }) => theme.color.dark[3]};
    border-radius: 50%;
  }

  &::-moz-range-thumb {
    width: 15px;
    height: 15px;
    background: ${({ theme }) => theme.color.dark[3]};
    border-radius: 50%;
  }
`;

export default RangeStyled;
