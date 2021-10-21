import { LOCATION_CHANGE } from "connected-react-router";
import { support } from "simpul";
import { getNewLocation } from "../actions/locationHistory";

function locationHistoryReducer(state = [], action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      const newLocation = getNewLocation();

      if (support.window("gtag")) {
        const page_path = newLocation.pathname + newLocation.search;
        window.gtag("set", "page_path", page_path);
        window.gtag("event", "page_view");
      }

      return [...state, newLocation];
    default:
      return state;
  }
}

export default locationHistoryReducer;
