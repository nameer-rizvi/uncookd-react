import { history, store } from "../../store";
import { componentDataUnmount } from "../componentData";

// Removed setTimeout() because the publish button is enabled during
// the delay, allowing the user to publish the draft multiple times more.

function draftPublish({ responseData: { slug } }) {
  history.push("/story/" + slug);
  store.dispatch(componentDataUnmount(["write", "profile", "home"]));
}

export default draftPublish;
