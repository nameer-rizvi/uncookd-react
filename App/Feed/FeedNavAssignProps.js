import { isArray } from "simpul";

function FeedNavAssignProps(nav, props) {
  // Find and set active link set index.

  let activeLinkSetIndex = nav.linkSets.findIndex(
    (linkSet) => linkSet[0] === props.params[nav.keys[0]]
  );

  if (activeLinkSetIndex === -1) activeLinkSetIndex = 0;

  // Assign default props.params.

  nav.keys.forEach((key, keyIndex) => {
    const param = props.params[key];
    const option = nav.linkSets[activeLinkSetIndex][keyIndex];
    const isValid = isArray(option) ? option.includes(param) : option === param;
    if (!isValid) props.params[key] = isArray(option) ? option[0] : option;
  });

  // Assign appropriate properties.

  nav.activeLinkSetIndex = activeLinkSetIndex;

  props.Content = nav.Content ? nav.Content[activeLinkSetIndex] : {};
}

export default FeedNavAssignProps;
