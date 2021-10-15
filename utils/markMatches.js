import { cleanAndSafe } from "../../shared";
import { trimBoundary } from "simpul";

export function markMatches(string, mark, tagName = "mark") {
  let { isSafeR: isSafeRString, clean: cleanString } = cleanAndSafe(string);

  let { isSafeR: isSafeRMark, clean: cleanMark } = cleanAndSafe(mark);

  if (isSafeRString && isSafeRMark) {
    const tag = { open: `<${tagName}>`, close: `</${tagName}>` };

    cleanMark = trimBoundary(cleanMark, `"`);

    const tokens = cleanMark.split(" ").join("|");

    const tokensRegex = RegExp(tokens, "gi");

    const tagMatch = (match) => tag.open + match + tag.close;

    cleanString = cleanString.replace(tokensRegex, tagMatch);

    const refs = ["@", "#"];

    refs.forEach((ref) => {
      const find = ref + tag.open;
      if (cleanString.includes(find))
        cleanString = cleanString.replace(find, tag.open + ref);
    });

    const neighboringTags = tag.close + " " + tag.open;

    while (cleanString.includes(neighboringTags)) {
      cleanString = cleanString.replace(neighboringTags, " ");
    }

    return cleanString;
  } else return cleanString;
}
