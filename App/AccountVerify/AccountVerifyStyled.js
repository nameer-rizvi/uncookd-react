import styled from "styled-components";
import { AccountContainer } from "../Account/AccountStyled";

const AccountVerifyStyled = styled(AccountContainer)`
  h4 {
    text-decoration: underline;
  }

  p {
    margin-bottom: 10px;
  }

  button,
  a {
    line-height: ${({ theme }) => theme.lineHeight[2]};
    justify-content: flex-start;
    text-align: left;
    text-decoration: underline;
    width: 100%;
  }

  p,
  button,
  a {
    font-size: ${({ theme }) => theme.fontSize.ml};
  }
`;

export default AccountVerifyStyled;
