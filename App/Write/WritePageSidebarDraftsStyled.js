import styled from "styled-components";
import { P, FlexBox, Small } from "../Element";

const margin = "30px";

export const ItalicP1 = styled(P)`
  margin: ${margin} 0;
  font-style: italic;
`;

export const ItalicP2 = styled(ItalicP1)`
  margin-top: 0;
`;

export const DraftLimitContainer = styled(FlexBox)`
  padding: 10px 0 ${margin} 0;
  small:not(:first-child) {
    margin-top: 5px;
  }
`;

export const DraftGetStatus = styled(Small)`
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 5px ${({ theme }) => theme.page.padding.mobile[3]};
  background-color: ${({ theme }) => theme.color.light[3]};
  ${({ theme }) => theme.page.width.template}
`;
