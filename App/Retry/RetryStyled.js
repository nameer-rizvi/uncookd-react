import styled from "styled-components";
import { FlexBox } from "../Element";

export const RetryContainer = styled(FlexBox)`
  width: 100%;
`;

export const RetryCore = styled(FlexBox)`
  max-width: 515px;
  margin: ${({ theme }) => theme.margin[1]};

  h1,
  h3,
  button {
    margin-bottom: 20px;
  }

  h3 {
    line-height: ${({ theme }) => theme.lineHeight[2]};
  }

  h3 span {
    display: inline-block;
  }
`;
