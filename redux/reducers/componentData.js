import {
  componentDataInitialState,
  COMPONENT_DATA_UPDATE,
  COMPONENT_DATA_UNMOUNT,
  COMPONENT_DATA_RESET,
} from "../actions/componentData";

function componentDataReducer(state = componentDataInitialState, action) {
  switch (action.type) {
    case COMPONENT_DATA_UPDATE:
      return { ...state, ...action.payload };
    case COMPONENT_DATA_UNMOUNT:
      return Object.keys(state).reduce((reducer, key) => {
        reducer[key] = action.payload.includes(key)
          ? componentDataInitialState[key]
          : state[key];
        return reducer;
      }, {});
    case COMPONENT_DATA_RESET:
      return componentDataInitialState;
    default:
      return state;
  }
}

export default componentDataReducer;
