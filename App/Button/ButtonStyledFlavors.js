// Has to be first (rest are in alphabetical order),
// Since hoverBorder & hoverUnderline, both call it.
export const $onActiveState = (style) => `
  &:hover,
  &:focus,
  &:focus-within {
    ${style}
  };
`;

// Mock disabled state
export const $disabled = (theme) => `
  opacity: ${theme.opacity.disabled};
`;

export const $hoverBorder = (theme) => `
  font-size: ${theme.fontSize.l};
  border: ${theme.border[4]};
  ${$onActiveState(`border-bottom: ${theme.border[1]};`)}
`;

export const $hoverUnderline = () => `
  text-decoration: none;
  ${$onActiveState("text-decoration: underline;")}
`;

export const $overflow = (theme) => `
  ${theme.preset.overflow}
  width: unset;
`;

export const $square = (theme) => `
  font-size: ${theme.fontSize.ml};
  border: ${theme.border[1]};
  padding: 5px 18px 6px;
  ${$onActiveState(`background-color: ${theme.color.light[4]};`)}
`;

export const $tabFill = (theme) => `
  height: 25px;
  width: 100%;
  box-sizing: border-box;
  flex: 1 1;
  padding: 5px;
  font-size: ${theme.fontSize.m};
  border: ${theme.border[1]};
  border-left: 0;
  &:first-child {
    border-left: ${theme.border[1]};
  }
  &.active {
    background-color: ${theme.color.dark[3]};
    color: ${theme.color.light[3]};
    font-weight: bold;
    ${$onActiveState("text-decoration: none;")}
  }
`;

export const $tabLight = (theme) => `
  height: 50px;
  width: 100%;
  padding-left: 20px;
  box-sizing: border-box;
  &.active {
    font-weight: bold;
    background-color: ${theme.color.light[5]};
  }
  ${$onActiveState(`&:not(.active) {
    background-color: ${theme.color.light[4]};
  }`)}
`;

export const $tabLight2 = (theme) => `
  height: 25px;
  width: 100%;
  box-sizing: border-box;
  background-color: ${theme.color.light[4]};
  font-style: italic;
  font-size: ${theme.fontSize.m};
  &.active {
    text-decoration: underline;
    font-weight: bold;
  }
`;

export const $topRight = () => `
  position: absolute;
  top: 15px;
  right: 22px;
`;

export const $underline = () => `
  text-decoration: underline;
`;
