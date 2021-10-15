import { combineReducers } from "redux";
import componentData from "./componentData";
import locationHistory from "./locationHistory";
import { connectRouter } from "connected-react-router";
import ui from "./ui";
import user from "./user";

const createRootReducer = (history) =>
  combineReducers({
    componentData,
    locationHistory,
    router: connectRouter(history),
    ui,
    user,
  });

export default createRootReducer;

// https://www.npmjs.com/package/redux
// https://www.npmjs.com/package/connected-react-router
