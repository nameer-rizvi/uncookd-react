import React from "react";
import styled from "styled-components";
import { Button, Header, H4, P, LI_2, Time } from "../Element";

export const TooltipButton = styled(Button)`
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  color: ${({ theme }) => theme.color.light[3]} !important;
`;

export const TooltipHeader = Header;

export const TooltipTitle = styled(H4)`
  .verified-badge {
    align-items: flex-start;
  }
  .verified-badge svg {
    padding-top: 2px;
  }
  font-size: ${({ theme }) => theme.fontSize.ml} !important;
`;

export const TooltipText = (props) => <P $fontSize="m" {...props} />;

export const TooltipListItem = styled(LI_2)`
  margin-top: 5px;
  svg {
    height: 20px;
    width: 20px;
    margin-right: 10px;
  }
`;

export const TooltipTime = (props) => (
  <Time className="tooltip-time" {...props} />
);
