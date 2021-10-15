import { font } from "../../../shared";
import styled from "styled-components";

// ***
//
// IMPORTANT...
//
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Interactive_elements
//
// ***

const TooltipStyledContainer = styled.div`
  .__react_component_tooltip {
    min-width: 175px;
    max-width: 300px;
    text-align: left;
    font-style: normal;
    font-family: ${font.family("timesNewRoman")};
    line-height: ${({ theme }) => theme.lineHeight[3]};
    color: ${({ theme }) => theme.color.light[3]} !important;
    background-color: ${({ theme }) => theme.color.dark[3]} !important;

    button.subscribe {
      border-color: ${({ theme }) => theme.color.light[3]} !important;
      color: ${({ theme }) => theme.color.light[3]} !important;
      width: 100%;
      margin-top: 10px;
    }

    a:hover {
      text-decoration: underline;
    }
  }

  .place-top::after,
  .place-right::after,
  .place-bottom::after,
  .place-left::after {
    display: none;
  }

  .__react_component_tooltip.persist {
    pointer-events: auto !important;
  }

  .__react_component_tooltip.persist:hover {
    visibility: visible !important;
    opacity: 1 !important;
  }

  .tooltip-time {
    font-size: ${({ theme }) => theme.fontSize.s} !important;
    margin: 10px 0;
  }
`;

export default TooltipStyledContainer;
