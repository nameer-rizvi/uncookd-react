import { uiInitialState, UI_UPDATE } from "../actions/ui";

function uiReducer(state = uiInitialState, action) {
  switch (action.type) {
    case UI_UPDATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default uiReducer;
