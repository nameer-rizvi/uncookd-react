import styled from "styled-components";
import { FormGenerator } from "../Form";

// TODO: Confirm "height: 100%" @ line 9 doesn't do any damage.

const WriteFormGeneratorStyled = styled(FormGenerator)`
  align-items: flex-end;
  overflow: auto;
  height: 100%;

  .gray-box {
    width: 100%;
    margin-bottom: 30px;

    p {
      font-size: ${({ theme }) => theme.fontSize.m};
    }

    p:not(:first-child) {
      margin-top: 8px;
    }

    dfn {
      font-style: italic;
    }
  }

  label {
    min-width: 85px !important;
  }

  .textarea-container {
    margin-top: 10px;
  }

  .checkbox-container {
    width: unset;
  }

  .checkbox-container label {
    min-width: unset !important;
  }

  &.page-1 {
    ${({ theme }) => theme.page.padding.template}

    button {
      margin: 0 0 15px 0;
    }

    ul button {
      margin: 0;
    }
  }
`;

export default WriteFormGeneratorStyled;
