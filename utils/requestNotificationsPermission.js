// --flow-serviceWorker-notifications

import { support } from "simpul";
import { log } from "../../shared";

// ** Function causes auto-refresh in incognito mode because
//    browser will auto-set permission to "denied" for user.
//
//    TODO: Block function from running by detecting if user
//          is running script in incognito mode. Extend this
//          validation check to AccountSessionPushManager.js.

export async function requestNotificationsPermission(isLoggedIn = false) {
  try {
    if (support.NotificationPermission("default") && isLoggedIn) {
      await Notification.requestPermission();

      window.location.reload();

      return "requested";
    }
  } catch (error) {
    log.sw("Permission Request: " + error.toString());
  }
}
