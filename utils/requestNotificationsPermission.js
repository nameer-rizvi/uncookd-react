// --flow-serviceWorker-notifications

import { support } from "simpul";
import { log } from "../../shared";

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
