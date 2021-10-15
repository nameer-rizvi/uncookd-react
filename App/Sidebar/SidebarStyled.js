import styled from "styled-components";
import Slide from "@material-ui/core/Slide";

export const SidebarContainer = styled(Slide)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  overflow: auto;
  background-color: ${({ theme }) => theme.color.light[3]};
  z-index: ${({ theme }) => theme.zIndex.sidebar};
  padding: ${({ theme }) => theme.page.padding.mobile.join(" ")};
  ${({ theme }) => theme.page.width.template}
`;

export const SidebarCore = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;
