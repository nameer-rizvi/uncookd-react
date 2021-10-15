import { getLastLocation } from "./locationHistory";
import { request } from "../../utils";

export const USER_UPDATE = "USER_UPDATE";

export const USER_RESET = "USER_RESET";

export const userUpdate = (payload) => ({ type: USER_UPDATE, payload });

export const userReset = () => ({ type: USER_RESET });

export const authFormRedirect = () =>
  (window.location.href = getLastLocation({ excludeRoots: ["account"] }));

export const logout = () =>
  request({
    method: "DELETE",
    url: "/user/account/logout",
    onSuccess: () => (window.location.href = "/"),
  });
