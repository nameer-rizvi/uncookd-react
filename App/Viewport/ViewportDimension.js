import { useState } from "react";
import { useEventListener } from "../../hooks";

// Set size increment so update is not on every single pixel change.

const increment = 25;

// Since media-queries have effect on a number (ex. "800px") as opposed
// to 'n+1', we need to account for updates by removing 1 from the size.

const cssMargin = 1;

const calculateIncrement = (size) => size - ((size - cssMargin) % increment);

function useViewportDimension() {
  const [height, setHeight] = useState(calculateIncrement(window.innerHeight));
  const [width, setWidth] = useState(calculateIncrement(window.innerWidth));

  function onWindowResize() {
    setHeight(calculateIncrement(window.innerHeight));
    setWidth(calculateIncrement(window.innerWidth));
  }

  useEventListener("resize", onWindowResize);

  return { height, width };
}

export default useViewportDimension;
