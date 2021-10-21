import { useSelector } from "react-redux";

export function useRouteProperties() {
  const { locationHistory, user } = useSelector((state) => state);

  const currentLocation = locationHistory[locationHistory.length - 1];

  const currentLocationRootPathname = currentLocation.rootPathname;

  const currentLocationPathname = currentLocation.pathname;

  const isPage =
    (user.isLoggedIn && currentLocationRootPathname === "write") ||
    currentLocationRootPathname === "story" ||
    currentLocationRootPathname === "comment";

  const hasFeed =
    !currentLocationRootPathname ||
    currentLocationRootPathname === "search" ||
    currentLocationRootPathname === "user" ||
    currentLocationRootPathname === "comment" ||
    (currentLocationRootPathname === "story" &&
      (currentLocationPathname.includes("/comments") ||
        currentLocationPathname.includes("/likes"))) ||
    (user.isLoggedIn &&
      currentLocationPathname.includes("/account/notifications"));

  return { isPage, hasFeed };
}
