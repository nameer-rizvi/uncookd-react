import React from "react";
import styled from "styled-components";
import { BoxAfter } from "../Element";

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog

const ModalBoxDialog = styled.dialog`
  z-index: ${({ theme }) => theme.zIndex.modal};
  position: fixed;
  top: 10%;
  right: 0;
  left: 0;
  min-width: 525px;
  max-width: 525px;
  max-height: 575px;
  margin: auto;
  padding: 40px 20px 0 20px; // 0 ===  BoxAfter.padding === 40px
  border: unset;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  color: inherit;
  background-color: ${({ theme }) => theme.color.light[3]};
  box-shadow: ${({ theme }) => theme.boxShadow[1]};
  overflow: auto;
`;

function ModalBox({ children, ...rest }) {
  if (rest.tabIndex) delete rest.tabIndex; // Can't use on <dialog>.

  return (
    <ModalBoxDialog open {...rest}>
      {children}
      <BoxAfter />
    </ModalBoxDialog>
  );
}

export default ModalBox;
