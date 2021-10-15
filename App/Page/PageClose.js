import { getLastLocation, history } from "../../redux";
import { useEventListener } from "../../hooks";

function usePageClose({ FullScreenExit }) {
  function close() {
    FullScreenExit();

    const lastLocation = getLastLocation({
      excludeRoots: ["comment", "story", "write"],
    });

    history.push(lastLocation);
  }

  useEventListener("keydown", (e) => e && e.key === "Escape" && close());

  const CloseButton = {
    name: "close_page",
    title: "Close page view.",
    svg: "close",
    onClick: close,
  };

  return { CloseButton, close };
}

export default usePageClose;
