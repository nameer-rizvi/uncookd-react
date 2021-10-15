import React, { createContext } from "react";
import useViewportDimension from "./ViewportDimension";
import useViewportBreakpointIndex from "./ViewportBreakpointIndex";
import useViewportDevice from "./ViewportDevice";

export const ViewportContext = createContext({});

export function ViewportProvider({ children }) {
  const dimension = useViewportDimension();

  const breakpointIndex = useViewportBreakpointIndex(dimension.width);

  const device = useViewportDevice(breakpointIndex);

  return (
    <ViewportContext.Provider value={{ ...dimension, breakpointIndex, device }}>
      {children}
    </ViewportContext.Provider>
  );
}
