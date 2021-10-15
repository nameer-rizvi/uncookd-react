import styled from "styled-components";
import { FlexBox } from "../Element";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint[3]}) {
    label,
    p {
      line-height: ${({ theme }) => theme.lineHeight[1]};
    }

    .pill-selector-container,
    .range-container,
    .select-container,
    .textarea-container,
    .input-container {
      flex-direction: column !important;
      margin-bottom: 35px !important;
      align-items: unset !important;
      label {
        text-align: unset !important;
        width: unset !important;
        margin-bottom: 5px;
      }
    }
    .pill-selector-container .pill-selector-core,
    .range-container .range-core,
    .select-container .select-core,
    .textarea-container .textarea-core,
    .input-container .input-core {
      margin-top: 5px;
    }
  }
`;

export const FieldContainer = styled(FlexBox)`
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 25px;
  flex-direction: ${({ $column }) => ($column ? "column" : "row")};
`;

export const FieldCore = styled(FlexBox)`
  flex-grow: 1;
`;

export const FormSmallLabelStyle = {
  $fontSize: "m",
  style: { marginTop: 10 },
};
