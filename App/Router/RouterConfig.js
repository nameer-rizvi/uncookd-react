import RouterConfigAccount from "./RouterConfigAccount";
import RouterConfigComment from "./RouterConfigComment";
import RouterConfigDefault from "./RouterConfigDefault";
import RouterConfigSearch from "./RouterConfigSearch";
import RouterConfigSite from "./RouterConfigSite";
import RouterConfigStory from "./RouterConfigStory";
import RouterConfigUser from "./RouterConfigUser";
import RouterConfigWrite from "./RouterConfigWrite";
import { splitPath, matchPath, joinPath } from "./RouterUtils";
import RouterViewAccess from "./RouterViewAccess";
import { URLQuery } from "../../utils";

// Order of configs is important...

const RouterConfigs = [
  ...RouterConfigDefault, // Should always be first.
  ...RouterConfigSearch,
  ...RouterConfigSite,
  ...RouterConfigAccount,
  ...RouterConfigUser,
  ...RouterConfigWrite,
  ...RouterConfigStory,
  ...RouterConfigComment,
];

function getRouterConfig(pathname, isLoggedIn) {
  const pathnameSplits = splitPath(pathname);

  let config = {},
    params = {},
    redirect;

  if (!pathnameSplits.length) {
    config = RouterConfigs.find(({ key }) => key === "home");
    params = URLQuery.get();
    return { ...config, params };
  } else {
    for (let i = 0; i < RouterConfigs.length; i++) {
      let RouterConfig = RouterConfigs[i];
      if (RouterConfig.path) {
        let match;
        let pathSplits = splitPath(RouterConfig.path);
        if (RouterConfig.redirectFroms) {
          for (let j = 0; j < RouterConfig.redirectFroms.length; j++) {
            let redirectFrom = RouterConfig.redirectFroms[j];
            let redirectFromSplits = splitPath(redirectFrom);
            match = matchPath(pathnameSplits, redirectFromSplits);
            if (match.found) {
              redirect = joinPath(pathSplits, match.tempParams);
              break;
            }
          }
        }
        match = matchPath(pathnameSplits, pathSplits);
        if (match.found) {
          if (RouterConfig.redirectTo) {
            let redirectToSplits = splitPath(RouterConfig.redirectTo);
            redirect = joinPath(redirectToSplits, match.tempParams);
            break;
          } else {
            config = RouterConfig;
            params = match.tempParams;
            break;
          }
        }
      }
    }

    return redirect || RouterViewAccess(config, isLoggedIn)
      ? { ...config, redirect, params: { ...params, ...URLQuery.get() } }
      : RouterConfigs.find(({ key }) => key === "notFound");
  }
}

export default getRouterConfig;