import styled from "styled-components";
import { Button } from "../Element";

const SubscribeButtonStyled = styled(Button)`
  height: 26px;
  min-width: 105px;
  padding: unset;
  border: double;
  font-size: ${({ theme }) => theme.fontSize.m};
  &:hover {
    text-decoration: underline;
  }
`;

export default SubscribeButtonStyled;
