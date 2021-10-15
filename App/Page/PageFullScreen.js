import { useState } from "react";
import screenfull from "screenfull";

function usePageFullScreen() {
  const [isFullscreen, setIsFullscreen] = useState(screenfull.isFullscreen);

  const updateIsFullscreen = () => setIsFullscreen(screenfull.isFullscreen);

  const FullScreenEnter = () =>
    screenfull
      .request()
      .then(updateIsFullscreen)
      .catch(console.error);

  const FullScreenExit = () =>
    screenfull
      .exit()
      .then(updateIsFullscreen)
      .catch(console.error);

  const isValidWidth = window.innerWidth > 650; // Same as ThemeConfig.pageWidth

  const FullScreenButton =
    isValidWidth && screenfull.isEnabled
      ? !isFullscreen
        ? {
            title: "Open full screen view.",
            name: "full_screen_open",
            svg: "full_screen_open",
            onClick: FullScreenEnter,
          }
        : {
            title: "Close full screen view.",
            name: "full_screen_close",
            svg: "full_screen_close",
            onClick: FullScreenExit,
          }
      : null;

  return { FullScreenExit, FullScreenButton };
}

export default usePageFullScreen;
