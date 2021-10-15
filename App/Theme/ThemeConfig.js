import ThemeConfigPalette from "./ThemeConfigPalette";
import { px } from "../../utils";

function ThemeConfig(themeMode) {
  const color = ThemeConfigPalette(themeMode);

  const _borderSize = 1;

  const _border = "solid " + _borderSize + "px ";

  const border = [
    null,
    _border + color.dark[3], // 1
    _border + color.dark[1], // 2
    _border + color.light[3], // 3
    _border + "transparent", // 4
    _borderSize + 1 + "px solid " + color.dark[3], // 5
    _border + color.warning, // 6
    "dashed " + _borderSize + "px " + color.dark[5], // 7
  ];

  const boxShadow = [
    null,
    "0 2px 4px 0 rgba(0,0,0,0.5)",
    "0 4px 14px 0 " + color.light[3],
  ];

  // If updating "breakpoint", must also update "../utils/useViewport.js"

  const breakpoint = [
    null,
    "300px", // 1  -- MOBILE
    "350px", // 2  -- MOBILE
    "415px", // 3  -- MOBILE
    "450px", // 4  -- MOBILE
    "500px", // 5  -- MOBILE
    "550px", // 6  -- TABLET
    "600px", // 7  -- TABLET
    "650px", // 8  -- TABLET
    "700px", // 9  -- TABLET
    "750px", // 10 -- TABLET
    "800px", // 11 -- DESKTOP
    "850px", // 12 -- DESKTOP
    "900px", // 13 -- DESKTOP
    "950px", // 14 -- DESKTOP
  ];

  const fontSize = {
    xxs: "8px",
    xs: "10px",
    s: "12px",
    m: "14px",
    ml: "15px",
    l: "16px",
    xl: "18px",
    xxl: "20px",
    xxxl: "22px",
    quarter: "25px",
    third: "32px",
    half_s: "45px",
    half: "50px",
  };

  const height = {
    pageNav: "60px",
    pageNavMobile: "50px",
  };

  const lineHeight = [
    null,
    "26px", // 1
    "20px", // 2
    "17px", // 3
    "30px", // 4
    "28px", // 5
    "40px", // 6
    "35px", // 7
    "1.5", //  8
    "1.25", // 9
  ];

  const margin = [null, "3em auto", "0 auto"];

  const opacity = {
    hover: 0.8,
    disabled: 0.6,
  };

  const padding = {
    container: {
      d: "25px",
      t: "10px",
      m: "15px",
    },
  };

  const pagePadding = {
    desktop: ["60px", "60px", "50px", "60px"],
    mobile: ["40px", "45px", "25px", "20px"],
  };

  const pageWidth = {
    width: "100%",
    maxWidth: "650px",
  };

  const page = {
    padding: {
      ...pagePadding,
      template: `
        padding: ${pagePadding.desktop.join(" ")};
        @media screen and (max-width: ${breakpoint[6]}) {
          padding: ${pagePadding.mobile.join(" ")};
        }
      `,
    },
    width: {
      ...pageWidth,
      template: `
        width: ${pageWidth.width};
        max-width: ${pageWidth.maxWidth};
      `,
    },
  };

  const zIndexHeader = 1;

  const preset = {
    overflow: `
      display: block;
      text-overflow: ellipsis;
      max-width: 100%;
      overflow: hidden;
      white-space: nowrap;
    `,
    limitWidth: (width = 400) => `
      width: 100%;
      max-width: ${width}px;
      margin: 0 auto;
      padding: 0 10px;
    `,
    mainWidth: `
      flex-grow: 1;
      flex-direction: row;
      @media screen and (max-width: ${breakpoint[14]}) {
        flex-direction: column;
      }
    `,
    meta: `
      min-width: 340px;
      max-width: 340px;
      box-sizing: border-box;
      line-height: ${({ theme }) => theme.lineHeight[1]};
      @media screen and (max-width: ${breakpoint[14]}) {
        min-width: unset;
        max-width: unset;
      }
    `,
    placeholder: [
      null,
      `
        margin: ${margin[1]};
        max-width: 500px;
        align-items: center;
        & > * {
          width: 100%;
          justify-content: flex-start;
          line-height: ${lineHeight[1]};
          margin: ${px.num(lineHeight[1]) / 2}px 0;
        }
      `,
    ],
    sticky: `
      position: sticky;
      background-color: ${color.light[3]};
      z-index: ${zIndexHeader};
      top: ${px.num(height.pageNavMobile) - 1}px;
    `,
  };

  const zIndex = [
    "feedNav",
    "header",
    "mobileHeader",
    "pageBackdrop",
    "page",
    "writeToolbar",
    "pageNav",
    "sidebarBackdrop",
    "sidebar",
    "modalBackdrop",
    "modal",
  ].reduce(
    (reducer, key, index) => ({ ...reducer, [key]: zIndexHeader + index }),
    {}
  );

  return {
    border,
    boxShadow,
    breakpoint,
    color,
    fontSize,
    height,
    lineHeight,
    margin,
    opacity,
    padding,
    page,
    preset,
    zIndex,
  };
}

export default ThemeConfig;
