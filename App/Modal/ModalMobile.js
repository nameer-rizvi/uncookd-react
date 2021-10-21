import React from "react";
import styled from "styled-components";

const ModalMobileStyled = styled.dialog`
  display: none;
  box-sizing: border-box;
  flex-direction: column;
  position: fixed;
  color: inherit;
  height: auto;
  border: unset;
  width: 100%;
  left: 0;
  right: 0;
  top: ${({ theme }) => theme.height.pageNavMobile};
  bottom: ${({ theme }) => theme.height.pageNav};
  z-index: ${({ theme }) => theme.zIndex.mobileHeader};
  background-color: ${({ theme }) => theme.color.light[3]};
  @media screen and (max-width: ${({ theme }) => theme.breakpoint[6]}) {
    display: flex;
  }
`;

const ModalMobile = (props) => <ModalMobileStyled open {...props} />;

export default ModalMobile;
