import { store, uiUpdate } from "../../redux";

const themeModes = ["light", "dark"];

const themeModeDefault = themeModes[0];

const key = "themeMode";

function ThemeModeInit() {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
  const userPreference =
    prefersDark && prefersDark.matches ? themeModes[1] : themeModeDefault;
  return { [key]: localStorage.getItem(key) || userPreference };
}

const ThemeModeGetNew = (currentThemeMode) =>
  currentThemeMode === themeModeDefault ? themeModes[1] : themeModeDefault;

function ThemeModeSet() {
  const currentThemeMode = store.getState().ui[key];
  const newThemeMode = ThemeModeGetNew(currentThemeMode);
  localStorage.setItem(key, newThemeMode);
  store.dispatch(uiUpdate({ [key]: newThemeMode }));
  return newThemeMode;
}

const ThemeMode = {
  key,
  default: themeModeDefault,
  init: ThemeModeInit,
  getNew: ThemeModeGetNew,
  set: ThemeModeSet,
};

export default ThemeMode;
