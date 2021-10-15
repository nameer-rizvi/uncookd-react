import { useState, useEffect } from "react";

const getDevice = (breakpointIndex) =>
  breakpointIndex < 6 ? "mobile" : breakpointIndex < 11 ? "tablet" : "desktop";

function useViewportDevice(breakpointIndex) {
  const [device, setDevice] = useState(getDevice(breakpointIndex));

  useEffect(() => {
    setDevice(getDevice(breakpointIndex));
  }, [breakpointIndex]);

  return device;
}

export default useViewportDevice;
