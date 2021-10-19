import { useState } from "react";
import { getLastLocation, history } from "../../redux";
import { useEventListener } from "../../hooks";

function usePageClose({ FullScreenExit }) {
  const [onClose, setOnClose] = useState();

  function close() {
    if (onClose) onClose();

    setTimeout(() => {
      FullScreenExit();

      const lastLocation = getLastLocation({
        excludeRoots: ["comment", "story", "write"],
      });

      history.push(lastLocation);
    }, 100); // To give the onClose a chance to initialize.
  }

  useEventListener("keydown", (e) => e && e.key === "Escape" && close());

  const CloseButton = {
    name: "close_page",
    title: "Close page view.",
    svg: "close",
    onClick: close,
  };

  return { CloseButton, close, setOnClose };
}

export default usePageClose;
