import React from "react";
import { useSelector } from "react-redux";
import { isObjectValid } from "simpul";
import ModalContainer from "./ModalContainer";
import ModalRouter from "./ModalRouter";

function Modal() {
  const ModalRouterProps = useSelector((state) => state.ui.modal);

  return isObjectValid(ModalRouterProps) ? (
    <ModalContainer sourceNode={ModalRouterProps.sourceNode}>
      <ModalRouter {...ModalRouterProps} />
    </ModalContainer>
  ) : null;
}

export default Modal;
