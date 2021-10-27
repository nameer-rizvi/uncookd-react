import { store } from "../store";

export function getNewLocation() {
  const { pathname, search, hash, href } = window.location;

  const newLocation = {
    rootPathname: pathname.split("/")[1],
    pathname,
    search,
    hash,
    href,
  };

  return newLocation;
}

export function getLastLocation(options = {}) {
  const { locationHistory } = store.getState();

  const { excludeRoots } = options;

  let href;

  for (let location of locationHistory)
    if (excludeRoots) {
      if (!excludeRoots.includes(location.rootPathname)) {
        href = location.href;
        break;
      }
    } else {
      href = location.href;
      break;
    }

  if (href) href = href.split(window.location.origin)[1];

  return href || "/";
}
