import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Loader from "../Loader";

function FeedContentNextScroll({ getNext }) {
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) getNext();
  }, [inView]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div ref={ref}>
      <Loader />
    </div>
  );
}

export default FeedContentNextScroll;
