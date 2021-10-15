import { useState } from "react";
import { isBoolean } from "simpul";

export function useToggle(initialState) {
  const [state, setState] = useState(Boolean(initialState));

  const change = (newState) =>
    setState((curr) => (isBoolean(newState) ? newState : !curr));

  return { state, change };
}
