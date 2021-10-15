import styled from "styled-components";
import { UL_3, Button } from "../Element";

export const PillTrayList = styled(UL_3)`
  flex-wrap: wrap;

  li.pill-tray-list-item {
    margin: 5px 0;
  }

  li.pill-tray-list-item:not(:last-child) {
    margin-right: 5px;
  }
`;

// padding: small ? "2px 6px 1px 8px" : "3px 5px 2px 7px",
// fontSize: small ? "13px" : "15px",

const StyledPillTrayItem = ({ theme, $withBorder, $selected }) => `
  width: auto;
  padding: 2px 6px 1px 6px;
  border-radius: 2px;
  font-size: ${theme.fontSize.m};
  line-height: ${theme.lineHeight[3]};
  word-break: break-word;

  ${
    $withBorder
      ? `border: ${theme.border[1]};`
      : $selected
      ? `
      a, button { color: unset }
      color: ${theme.color.light[3]} !important;
      background-color: ${theme.color.dark[5]};
      `
      : `background-color: ${theme.color.light[5]};`
  }

  svg.pill-tray-item-svg {
    min-height: 15px;
    max-height: 15px;
    min-width: 15px;
    max-width: 15px;
    margin-right: 4px;
  }
`;

export const PillTrayItemButton = styled(Button)(StyledPillTrayItem);

export const PillTrayItemSpan = styled.span(StyledPillTrayItem);
