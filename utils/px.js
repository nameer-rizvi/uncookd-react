export const num = (px = "") => +px.split("px")[0];

export const scale = (scale) => 5 * scale + "px";

export const px = { num, scale };
