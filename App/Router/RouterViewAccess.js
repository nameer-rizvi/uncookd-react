import { isObjectValid } from "simpul";
import { isEnv } from "simpul";

const RouterViewAccess = (config, isLoggedIn) =>
  isObjectValid(config) &&
  (config.viewAccess
    ? config.viewAccess === "development" // In local dev environment only.
      ? !isEnv.live
      : config.viewAccess === "public" // For anonymous users only.
      ? !isLoggedIn
      : config.viewAccess === "private" // For logged-in users only.
      ? isLoggedIn
      : false
    : true);

export default RouterViewAccess;
