import { LOCATION_CHANGE } from "connected-react-router";
import { support } from "simpul";
import { getNewLocation } from "../actions/locationHistory";

function locationHistoryReducer(state = [], action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      const newLocation = getNewLocation();

      if (support.window("gtag")) {
        window.gtag("set", "page", newLocation.pathname + newLocation.search);
        window.gtag("send", "pageview");
      }

      return [...state, newLocation];
    default:
      return state;
  }
}

export default locationHistoryReducer;
