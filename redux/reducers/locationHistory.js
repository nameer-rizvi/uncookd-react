import { LOCATION_CHANGE } from "connected-react-router";
import { getNewLocation } from "../actions/locationHistory";
import { gtag } from "../../utils";

function locationHistoryReducer(state = [], action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      const newLocation = getNewLocation();

      gtag.newPageView(newLocation.pathname + newLocation.search);

      return [...state, newLocation];
    default:
      return state;
  }
}

export default locationHistoryReducer;
