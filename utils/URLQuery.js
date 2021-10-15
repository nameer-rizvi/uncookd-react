import { isObject } from "simpul";
import sanitized from "sanitized";
import { cleanAndSafe } from "../../shared";

const generate = (object) =>
  isObject(object)
    ? "?" + new URLSearchParams(sanitized(object)).toString()
    : "";

function get(key) {
  const entries = new URLSearchParams(window.location.search).entries();
  const params = {};
  for (let [entryKey, entryValue] of entries) {
    try {
      params[entryKey] = sanitized(JSON.parse(entryValue));
    } catch {
      params[entryKey] = safe(entryValue);
    }
  }
  return key ? params[key] : params;
}

function home(hashtag) {
  const state = window.location.pathname === "/" && get();
  return "/" + generate({ ...state, hashtag });
}

function safe(dirty) {
  try {
    let { clean } = cleanAndSafe(dirty);
    if (clean) clean = decodeURIComponent(clean.replace("%", ""));
    return clean === "undefined" ? undefined : clean;
  } catch (error) {
    console.error(error);
    return;
  }
}

export const URLQuery = { generate, get, home, safe };
