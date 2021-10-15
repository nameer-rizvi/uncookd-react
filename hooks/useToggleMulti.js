import { useState } from "react";

export function useToggleMulti(initialState = []) {
  const [state, setState] = useState(initialState);

  const _state = (item) => state.includes(item);

  const change = (item) =>
    setState((curr = []) =>
      curr.includes(item) ? curr.filter((i) => i !== item) : [...curr, item]
    );

  return { state: _state, change, self: state };
}
