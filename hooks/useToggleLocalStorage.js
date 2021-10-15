import { parseJSON } from "simpul";
import { useToggleMulti } from "./useToggleMulti";
import { useEffect } from "react";

const getInitialState = (key) =>
  parseJSON(window.localStorage.getItem(key)) || [];

export function useToggleLocalStorage(key) {
  const toggle = useToggleMulti(getInitialState(key));

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(toggle.self));
  }, [key, toggle.self]);

  return toggle;
}
