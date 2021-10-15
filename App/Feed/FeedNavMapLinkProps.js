import { isString, isArray, isObjectValid } from "simpul";
import { RouterUtils } from "../Router";
import { URLQuery } from "../../utils";
import { sentenceCase } from "change-case";

function makeLinkProps(
  keys,
  params,
  linkSet,
  linksIndex,
  link,
  path,
  includeURLParams,
  linkLabels,
  linkSetIndex
) {
  // Reduce link params from params and link set using requested keys.

  const linkParams = keys.reduce((reducer, key, keyIndex) => {
    const currentParam = params[key];
    const option = linkSet[keyIndex];
    const linkParam =
      keyIndex === linksIndex
        ? link
        : isString(option)
        ? currentParam === option
          ? currentParam
          : option
        : isArray(option)
        ? option.includes(currentParam)
          ? currentParam
          : option[0]
        : null;
    return { ...reducer, [key]: linkParam };
  }, {});

  // Map URL variables to include in rooth path maker, if variable is part of path.

  const includePathVariables = RouterUtils.splitPath(path)
    .filter(RouterUtils.isParam)
    .map(RouterUtils.makeParamName);

  // Make path to link to.

  let to = RouterUtils.makeRootPath(path, {
    params: { ...params, ...linkParams },
    include: includePathVariables,
  });

  // Filter and reduce URL params that are not path variables.

  const URLParams = Object.keys(linkParams)
    .filter((linkParamKey) => !includePathVariables.includes(linkParamKey))
    .reduce(
      (reducer, linkParamKey) => ({
        ...reducer,
        [linkParamKey]: linkParams[linkParamKey],
      }),
      {}
    );

  // Include any non-keys-config params requested by component.

  if (includeURLParams)
    includeURLParams.forEach(
      (URLParam) => params[URLParam] && (URLParams[URLParam] = params[URLParam])
    );

  // If any URL params exist, append them to the link path as query params.

  if (isObjectValid(URLParams)) to += URLQuery.generate(URLParams);

  // Create link title.

  const title = sentenceCase(`${keys[linksIndex]} ${link}`) + ".";

  // Create link label.

  const children =
    linkLabels &&
    linkLabels[linkSetIndex] &&
    linkLabels[linkSetIndex][linksIndex]
      ? linkLabels[linkSetIndex][linksIndex](link, linkSetIndex, linksIndex)
      : link;

  // Return link props.

  return { value: link, to, title, children };
}

const FeedNavMapLinkProps = (
  linkSets,
  keys,
  params,
  path,
  includeURLParams,
  linkLabels
) =>
  linkSets.map((linkSet, linkSetIndex) =>
    linkSet.map((links, linksIndex) =>
      isArray(links)
        ? links
            .filter(Boolean)
            .map((link, linkIndex) =>
              makeLinkProps(
                keys,
                params,
                linkSet,
                linksIndex,
                link,
                path,
                includeURLParams,
                linkLabels,
                linkSetIndex
              )
            )
        : makeLinkProps(
            keys,
            params,
            linkSet,
            linksIndex,
            links,
            path,
            includeURLParams,
            linkLabels,
            linkSetIndex
          )
    )
  );

export default FeedNavMapLinkProps;
