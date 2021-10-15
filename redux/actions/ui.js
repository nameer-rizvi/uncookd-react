import { ThemeMode } from "../../App/Theme";

export const uiInitialState = { modal: {}, ...ThemeMode.init() };

export const UI_UPDATE = "UI_UPDATE";

export const uiUpdate = (payload) => ({ type: UI_UPDATE, payload });

export const modalOpen = (payload) =>
  uiUpdate({
    modal: { ...payload, sourceNode: { name: document.activeElement.name } },
  });

export const modalClose = () => uiUpdate({ modal: {} });
