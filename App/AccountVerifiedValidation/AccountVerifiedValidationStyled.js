import styled from "styled-components";
import { GrayBox } from "../Element";

const AccountVerifiedValidationStyled = styled(GrayBox)`
  font-size: ${({ theme }) => theme.fontSize.m};
  margin-bottom: 20px;
`;

export default AccountVerifiedValidationStyled;
