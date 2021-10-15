import styled from "styled-components";
import { Header, FlexBox } from "../Element";

export const HeaderStyledMobileTop = styled(Header)`
  position: fixed;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  height: ${({ theme }) => theme.height.pageNavMobile};
  border-bottom: ${({ theme }) => theme.border[1]};
  background-color: ${({ theme }) => theme.color.light[3]};
  z-index: ${({ theme }) => theme.zIndex.header};
`;

export const HeaderStyledMobileBottom = styled(FlexBox)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme }) => theme.height.pageNav};
  background-color: ${({ theme }) => theme.color.light[4]};
  z-index: ${({ theme }) => theme.zIndex.header};
`;
