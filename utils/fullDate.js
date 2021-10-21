export const fullDate = (date = new Date(), options = {}) =>
  new Intl.DateTimeFormat("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
    ...options,
  }).format(new Date(date));

export const effectiveDate = fullDate(new Date("10/19/2021"));
