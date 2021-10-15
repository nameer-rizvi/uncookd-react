import styled from "styled-components";
import { Button } from "../Element";

const StyledButton = styled(Button)`
  position: fixed;
  right: 25px;
  bottom: 25px;
  padding: 2px 7px;
  border-radius: 2px;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.color.light[3]};
  background-color: ${({ theme }) => theme.color.dark[3]};

  &:hover,
  &:focus,
  &:focus-within {
    text-decoration: underline;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint[6]}) {
    right: 15px;
    bottom: 70px;
  }
`;

export default StyledButton;
