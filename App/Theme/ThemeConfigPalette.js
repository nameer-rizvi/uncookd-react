import { style } from "../../../shared";

function ThemeConfigPalette(themeMode) {
  const { color, backgroundColor } = style;

  const colorPaletteLight = [
    null,
    "#fff",
    "#f7f7f7",
    backgroundColor,
    "#e5e5e6",
    "#cfd0d1",
  ];

  const colorPaletteDark = [
    null,
    "#747474",
    "#35363a",
    color,
    "#202227",
    "#1e2025",
  ];

  const colorTheme = {
    light: {
      light: colorPaletteLight,
      dark: colorPaletteDark,
      warning: "#ff0000",
      success: "#11c111",
    },
    dark: {
      light: colorPaletteDark,
      dark: colorPaletteLight,
      warning: "#ff69b4",
      success: "#00ff7f",
    },
  };

  return colorTheme[themeMode] || colorTheme.light;
}

export default ThemeConfigPalette;
