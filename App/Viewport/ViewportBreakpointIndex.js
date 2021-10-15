import ThemeConfig from "../Theme/ThemeConfig";
import { px } from "../../utils";
import { useState, useEffect } from "react";

const { breakpoint: breakpoints } = ThemeConfig();

// Function to get breakpoint index based on width state.

function getBreakpointIndex(width) {
  const index = breakpoints.findIndex(
    (breakpoint) => breakpoint && px.num(breakpoint) >= width
  );
  return index === -1 ? breakpoints.length - 1 : index - 1;
}

function useViewportBreakpointIndex(width) {
  const [breakpointIndex, setBreakpointIndex] = useState(
    getBreakpointIndex(width)
  );

  useEffect(() => {
    setBreakpointIndex(getBreakpointIndex(width));
  }, [width]);

  return breakpointIndex;
}

export default useViewportBreakpointIndex;
