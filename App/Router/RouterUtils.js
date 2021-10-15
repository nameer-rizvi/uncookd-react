import { URLQuery } from "../../utils";

export const isParam = (param = "") => param && param.startsWith(":");

// ******
// ******
// ******

export const makeParamName = (param = "") =>
  isParam(param) ? param.substring(1) : param;

// ******
// ******
// ******

export const splitPath = (path = "") => path.split("/").filter(Boolean);

// ******
// ******
// ******

export function joinPath(pathSplits = [], tempParams = {}) {
  let path = "";

  for (let i = 0; i < pathSplits.length; i++) {
    let pathSplit = isParam(pathSplits[i])
      ? tempParams[makeParamName(pathSplits[i])]
      : pathSplits[i];
    if (pathSplit) {
      path += "/" + pathSplit;
    } else break;
  }

  return path || "/";
}

// ******
// ******
// ******

export function makeRootPath(path, options = {}) {
  let rootPath = "";

  const pathSplits = splitPath(path);

  for (let i = 0; i < pathSplits.length; i++) {
    let pathSplit = pathSplits[i];

    let pathSplitIsParam = isParam(pathSplit);

    let pathSplitParamName = makeParamName(pathSplit);

    let includePathSplitParamValue =
      pathSplitIsParam &&
      options.include &&
      options.include.includes(pathSplitParamName);

    let rootPathSplit = includePathSplitParamValue
      ? options.params && options.params[pathSplitParamName]
      : !isParam(pathSplit) && pathSplit;

    if (rootPathSplit) {
      rootPath += "/" + rootPathSplit;
    } else break;
  }

  return rootPath || "/";
}

// ******
// ******
// ******

export function matchPath(pathnameSplits = [], pathSplits = []) {
  let iterations = Math.max(pathnameSplits.length, pathSplits.length);

  let tempParams = {};

  let found = false;

  for (let i = 0; i < iterations; i++) {
    let pathnameSplit = pathnameSplits[i];

    let pathSplit = pathSplits[i];

    if (isParam(pathSplit)) {
      tempParams[makeParamName(pathSplit)] = URLQuery.safe(pathnameSplit);
    } else found = pathSplit === pathnameSplit;
  }

  return { tempParams, found };
}
