import { store, modalClose, modalOpen, history } from "../redux";
import { URLQuery } from "./URLQuery";
import { flatten } from "simpul";

export function renderModalComponent(props) {
  const { location, payload = {} } = props;

  const locationMatch =
    window.location.pathname === location ||
    window.location.pathname === location + "/";

  const locationMatchNotifications =
    location === "/account/notifications" &&
    window.location.pathname.startsWith(location);

  const isBigScreen = window.innerWidth > 700;

  if (locationMatch || locationMatchNotifications) {
    store.dispatch(modalClose());
  } else if (isBigScreen) {
    store.dispatch(modalOpen(props));
  } else {
    store.dispatch(modalClose());

    const newLocation = location + URLQuery.generate(flatten(payload));

    history.push(newLocation);
  }
}
