import styled from "styled-components";
import { UL_3 } from "./ListUL";

export const UL_3_GrayItalic = styled(UL_3)`
  background-color: ${({ theme }) => theme.color.light[4]};
  width: 100%;
  flex-wrap: wrap;

  li {
    flex: 1 1;
    font-style: italic;
    font-size: ${({ theme }) => theme.fontSize.m};
    border-bottom: ${({ theme }) => theme.border[4]};
  }

  li.active a {
    font-weight: bold;
    text-decoration: underline;
  }

  li.active svg {
    border: ${({ theme }) => theme.border[1]};
    border-radius: 50%;
  }

  li:not(.active) a:hover,
  li:not(.active) a:focus {
    text-decoration: underline;
  }

  li a,
  li button {
    flex-grow: 1;
    padding: 8px 0;
  }

  ${({ $stackBreakpoint, theme }) =>
    $stackBreakpoint
      ? `
      @media screen and (max-width: ${theme.breakpoint[$stackBreakpoint]}) {
        flex-direction column;
        li a,
        li button {
          justify-content: flex-start;
          padding-left: 20px;
          padding-right: 20px;
        }
      }
      `
      : ""}
`;
