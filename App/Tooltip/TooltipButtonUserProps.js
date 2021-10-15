import { isNumber, isStringValid } from "simpul";
import { label } from "../../../shared";
import TooltipButtonUserTemplate from "./TooltipButtonUserTemplate";

function TooltipButtonUserProps(props = {}) {
  const { user_id, username, display_name } = props;

  props.isValid = isNumber(user_id) && isStringValid(username);

  props.to = `/user/${username}`;

  props.label = label.user({ username, display_name });

  props.title = `Go to profile page for ${props.label}.`;

  props.api = { url: "/user", paramKeys: ["user_id", "requestKeys"] };

  props.requestKeys = [
    !props.excludeSubscribeButton && "subscription", // By proxy, this includes "content_access" key.
    "is_verified",
    "display_name",
    "bio",
    "joined_at",
    "count_stories",
    "count_subscribers",
  ].filter(
    (requestKey) =>
      requestKey && !props[requestKey] && !isNumber(props[requestKey])
  );

  props.Template = TooltipButtonUserTemplate;
}

export default TooltipButtonUserProps;
