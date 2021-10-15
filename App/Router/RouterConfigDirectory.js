import { lazy } from "react";
import { capitalize } from "simpul";

const RouterConfigDirectory = (key, routerConfigs, filterKeys = []) => ({
  key,
  path: "/" + key,
  title: capitalize(key),
  description: `Directory of available url paths nested under /${key}.`,
  ComponentLazy: lazy(() => import("./RouterConfigDirectoryPage")),
  routes: routerConfigs
    .filter(({ key }) => !filterKeys.includes(key))
    .map(({ path, title, description, viewAccess }) => ({
      path,
      title,
      description,
      viewAccess,
    })),
});

export default RouterConfigDirectory;
