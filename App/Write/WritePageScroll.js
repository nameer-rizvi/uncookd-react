import { useEffect } from "react";

const useWritePageScroll = ({ page }) =>
  useEffect(() => {
    const refCurrent = page.ref && page.ref.current;

    if (refCurrent && page.number === 1) refCurrent.scrollTo(0, 0);
  }, [page.number]); // eslint-disable-line react-hooks/exhaustive-deps

export default useWritePageScroll;
