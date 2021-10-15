// --flow-serviceWorker-notifications-2

import { support, urlBase64ToUint8Array } from "simpul";
import { store } from "../../redux";
import { requestNotificationsPermission } from "../../utils";
import { log } from "../../../shared";
import axios from "axios";

async function AccountSessionPushManager() {
  try {
    // Validate if browser supports minimum notification requirements.

    if (!support.serviceWorker() || !support.Notification())
      throw new Error("Browser doesn't support notifications.");

    // Initialize Registration from service worker.

    const Registration = await navigator.serviceWorker.ready;

    // Validate if Registration exists.

    if (!Registration) throw new Error("Registration not found.");

    // Initialize Push Manager from Registration.

    const { pushManager: PushManager } = Registration;

    // Validate if Push Manager exists.

    if (!PushManager) throw new Error("Push Manager not found.");

    // Declare constant for if the user is logged-in, from the redux store.

    const { isLoggedIn } = store.getState().user;

    // If user hasn't set permission for receiving notifications, request permission.

    const permissionResponse = await requestNotificationsPermission(isLoggedIn);

    // If permission is requested, end function.

    if (permissionResponse === "requested") return;

    // Initialize Subscription from the Push Manager.

    const Subscription = await PushManager.getSubscription();

    // Declare constant for if user has granted permission for receiving notifications.

    const notificationPermissionIsGranted = support.NotificationPermission();

    // Declare constant for if there is an active Subscription, and the user is logged-in,
    // and the user has granted permission for receiving notifications.

    const update =
      Subscription && isLoggedIn && notificationPermissionIsGranted;

    // Declare constant for if there isn't an active Subscription, and the user is logged-in,
    // and the user has granted permission for receiving notifications.

    const subscribe =
      !Subscription && isLoggedIn && notificationPermissionIsGranted;

    // Declare constant for if there is an active Subscription, and if either
    // (a) the user is not logged-in or (b) if the user has not granted permission
    // for receiving notifications.

    const unsubscribe =
      Subscription && (!isLoggedIn || !notificationPermissionIsGranted);

    if (update) {
      // If the conditions for updating the subscription are true...

      // Log the endpoint for the active Subscription.

      log.sw("active subscription to " + endpointFor(Subscription));

      // Update the subscription on the server.

      await axios.put("/webpush/subscription", {
        webpushSubscription: JSON.stringify(Subscription),
      });

      // Log successful server update.

      log.sw("updated subscription on the server");
    } else if (subscribe) {
      // If the conditions for susbcribing a new subscription are true...

      // Get the public vapid key from the server.

      const vapidKeyPublic = await axios.get("/webpush/vapid-key-public");

      // Register a new subscription.

      const NewSubscription = await PushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(vapidKeyPublic.data),
      });

      // Log successful registration.

      log.sw("subscribed to " + endpointFor(NewSubscription));

      // Save the new subscription on the server.

      await axios.post("/webpush/subscription", {
        webpushSubscription: JSON.stringify(NewSubscription),
      });

      // Log successful server save.

      log.sw("saved subscription on the server");
    } else if (unsubscribe) {
      // If the conditions for unsubcribing are true...

      // Unsubscribe from the active Subscription.

      await Subscription.unsubscribe();

      // Log successful unsubscribe.

      log.sw("unsubscribed from " + endpointFor(Subscription));

      if (isLoggedIn) {
        // If the user is logged in...

        // Delete the user subscription saved on the server.

        await axios.delete("/webpush/subscription");

        // Log successful server deletion.

        log.sw("canceled subscription on the server");
      }
    }
  } catch (error) {
    log.sw("Push Manager: " + error.toString()); // Log any errors with the "sw" emoji.
  }
}

// Quick util for returning generic portion of endpoint for logging purposes.

function endpointFor(Subscription) {
  return (
    Subscription.endpoint && Subscription.endpoint.split(".com")[0] + ".com"
  );
}

export default AccountSessionPushManager;
