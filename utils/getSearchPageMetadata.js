import { dictionary, name } from "../../shared";
import { numberLabel, capitalize } from "simpul";

export function getSearchPageMetadata({ list, q }) {
  const configs = dictionary
    .get("list", "whitelist")
    .slice(0, 4)
    .map((listName) => ({
      list: listName,
      plural: numberLabel(2, listName).label,
    }));

  const config = configs.find((i) => i.list === list);

  const title = {};

  title.document = config ? "Search " + capitalize(config.plural) : "Search";

  if (q) title.document += `: "${q}"`;

  title.page = config
    ? !q
      ? [`Search for ${config.plural} on`, `${name.main}.`]
      : [`Showing ${config.list} search results for:`, `"${q}"`]
    : ["Search for anything on", `${name.main}.`];

  return { configs, config, title };
}
