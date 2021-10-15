// * useRequestState() is required as a separate hook versus complete integration with request() because
//   request() needs to be able to be called in hooks (see AccountSession.js)... and hooks can't nest.

import { useState, useEffect } from "react";

export function useRequestState(props = {}) {
  const {
    initialPending = false,
    initialError,
    initialCancelSource = {},
  } = props;

  const [pending, setPending] = useState(initialPending);

  const [error, setError] = useState(initialError);

  const [cancelSource, setCancelSource] = useState(initialCancelSource);

  useEffect(() => () => cancelSource.cancel && cancelSource.cancel(), [
    cancelSource,
  ]);

  return {
    pending,
    setPending,
    error,
    setError,
    cancelSource,
    setCancelSource,
  };
}
