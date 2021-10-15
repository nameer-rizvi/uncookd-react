import styled from "styled-components";
import { UL_3 } from "./ListUL";

export const UL_3_RadioButton = styled(UL_3)`
  flex-wrap: wrap;
  justify-content: flex-end;
  width: 100%;

  li:not(:first-child) {
    padding-left: 15px;
  }

  li button::before,
  li a::before {
    content: "\\025EF";
    margin-right: 7px;
    padding-top: 2px;
  }

  li.active button::before,
  li.active a::before {
    content: "\\25C9";
    margin-right: 7px;
    padding-top: 2px;
  }

  button,
  a {
    padding: 8px 5px;
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  ${({ $stackBreakpoint, theme }) =>
    $stackBreakpoint
      ? `
      @media screen and (max-width: ${theme.breakpoint[$stackBreakpoint]}) {
        flex-direction column;
        padding: 4px 0;
        border-bottom: ${theme.border[1]};

        li:not(:first-child) {
          padding-left: unset;
        }

        button,
        a {
          padding: 2px 0;
          font-size: ${theme.fontSize.m};
        }
      }
      `
      : ""}
`;
