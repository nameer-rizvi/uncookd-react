import { ThemeMode } from "../../App/Theme";
import { gtag } from "../../utils";

export const uiInitialState = { modal: {}, ...ThemeMode.init() };

export const UI_UPDATE = "UI_UPDATE";

export const uiUpdate = (payload) => ({ type: UI_UPDATE, payload });

export function modalOpen(payload) {
  if (payload.location) gtag.newPageView(payload.location);
  return uiUpdate({
    modal: { ...payload, sourceNode: { name: document.activeElement.name } },
  });
}

export function modalClose() {
  gtag.newPageView(window.location.pathname + window.location.search);
  return uiUpdate({ modal: {} });
}
