import styled from "styled-components";
import { FlexBox } from "../Element";

export const AccountContainer = styled(FlexBox)`
  ${({ theme }) => theme.preset.limitWidth(400)}

  h1,
  h4 {
    margin-bottom: 20px;
  }

  q {
    margin: 20px 0 10px 0;
  }

  form {
    margin-top: 20px;
  }

  label {
    text-transform: uppercase;
    width: 95px;
  }

  button[type="submit"] {
    width: 100%;
  }

  form#forgot-password label {
    width: unset;
  }

  form#reset-password label {
    width: 135px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint[3]}) {
    align-items: unset;
  }
`;

export const AccountAuthDivider = styled.span`
  width: 150px;
  height: 4px;
  border-top: ${({ theme }) => theme.border[1]};
  border-bottom: ${({ theme }) => theme.border[1]};
`;
