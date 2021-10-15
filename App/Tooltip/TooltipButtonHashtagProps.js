import { isStringValid, isNumber } from "simpul";
import { URLQuery } from "../../utils";
import { label } from "../../../shared";
import TooltipButtonHashtagTemplate from "./TooltipButtonHashtagTemplate";

function TooltipButtonHashtagProps(props = {}) {
  const { hashtag } = props;

  props.isValid = isStringValid(hashtag);

  props.to = URLQuery.home(hashtag);

  props.label = label.hashtag(hashtag);

  props.title = `See ${props.label} stories.`;

  props.api = { url: "/hashtag", paramKeys: ["hashtag", "requestKeys"] };

  props.requestKeys = [
    "count_stories",
    "count_subscribers",
    !props.excludeSubscribeButton && "subscription",
  ].filter(
    (requestKey) =>
      requestKey && !props[requestKey] && !isNumber(props[requestKey])
  );

  props.Template = TooltipButtonHashtagTemplate;
}

export default TooltipButtonHashtagProps;
