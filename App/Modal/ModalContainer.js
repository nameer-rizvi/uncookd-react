import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { modalClose } from "../../redux";
import useModalContainerEventListeners from "./ModalContainerEventListeners";
import { Backdrop, Button } from "../Element";
import ModalBox from "./ModalBox";

function ModalContainer({ id, sourceNode, children }) {
  if (!id) id = "modal";

  const closeButtonName = "close_modal";

  const dispatch = useDispatch();

  function close() {
    if (sourceNode && sourceNode.name) {
      const sourceNodeEl = document.getElementsByName(sourceNode.name)[0];
      if (sourceNodeEl) sourceNodeEl.focus();
    }
    dispatch(modalClose());
  }

  useModalContainerEventListeners(id, closeButtonName, close);

  return (
    <Fragment>
      <Backdrop
        $opacity={0.7}
        onClick={close}
        title="Modal backdrop. Click to close modal."
        $zIndex="modalBackdrop"
      />
      <ModalBox close={close} id={id}>
        <Button
          name={closeButtonName}
          title="Close modal."
          svg="close"
          onClick={close}
          $topRight
          focus
        />
        {children}
      </ModalBox>
    </Fragment>
  );
}

export default ModalContainer;
