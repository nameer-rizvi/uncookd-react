import { useEffect } from "react";
import { useEventListener } from "../../hooks";

function isActiveElementInModal(id) {
  const node = document.getElementById(id);
  return node && node.contains(document.activeElement);
}

function useModalContainerEventListeners(id, closeButtonName, close) {
  useEffect(() => {
    if (!isActiveElementInModal(id)) {
      const closeButton = document.getElementsByName(closeButtonName)[0];
      if (closeButton) closeButton.focus();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEventListener("keydown", (event = {}) => {
    if (event.key === "Escape") close();
  });

  useEventListener("keyup", (event = {}) => {
    if (event.key === "Tab" && !isActiveElementInModal(id)) close();
  });
}

export default useModalContainerEventListeners;
