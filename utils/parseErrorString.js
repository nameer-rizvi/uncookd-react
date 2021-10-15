import { isStringValid, isNumber, numberLabel } from "simpul";

export function parseErrorString(err, alt) {
  let errorString = err
    ? err.response &&
      isStringValid(err.response.data) &&
      !err.response.data.includes("html")
      ? err.response.data
      : err.response &&
        isStringValid(err.response.statusText) &&
        !err.response.statusText.includes("html")
      ? err.response.statusText
      : isStringValid(err.message)
      ? err.message
      : isStringValid(err.toString())
      ? err.toString()
      : null
    : null;

  if (
    (alt && !errorString) ||
    errorString === "Internal Server Error" ||
    errorString === "Forbidden"
  )
    errorString = alt;

  const rateLimitRemaining =
    err &&
    err.response &&
    err.response.headers &&
    err.response.headers["x-rate-limit-remaining"];

  const rateLimitLabel =
    isNumber(rateLimitRemaining) &&
    +rateLimitRemaining < 10 &&
    numberLabel(+rateLimitRemaining, "tries").full;

  if (rateLimitLabel) errorString += ` (${rateLimitLabel} remaining)`;

  return errorString && errorString.includes("Error:")
    ? errorString.replaceAll("Error:").trim()
    : errorString;
}
