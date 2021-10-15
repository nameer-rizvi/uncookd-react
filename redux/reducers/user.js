import { USER_UPDATE, USER_RESET } from "../actions/user";

function userReducer(state = {}, action) {
  switch (action.type) {
    case USER_UPDATE:
      return { ...state, ...action.payload };
    case USER_RESET:
      return {};
    default:
      return state;
  }
}

export default userReducer;
