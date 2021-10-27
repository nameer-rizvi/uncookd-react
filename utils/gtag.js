import { support } from "simpul";

function newPageView(page_path) {
  if (support.window("gtag")) {
    window.gtag("set", "page_path", page_path);
    window.gtag("event", "page_view");
  }
}

export const gtag = { newPageView };
