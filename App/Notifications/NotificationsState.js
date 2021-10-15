import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { HTMLDocument, request } from "../../utils";
import { RouterUtils } from "../Router";
import { history } from "../../redux";

function useNotificationsState(props) {
  // Notification counts from user state.

  const {
    count_notifications_new,
    count_notifications_new_total: count_new_total,
  } = useSelector((state) => state.user);

  // Use effect to update html document.

  useEffect(() => {
    if (props.path && count_new_total > 0)
      HTMLDocument.updateTitle(`(${count_new_total}) Notifications`);

    request({
      method: "PUT",
      url: "/user/account/update",
      params: { updateKey: "note_last" },
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // List state for nav.

  const prefix = "note_";

  const delimiter = ["_", "-"];

  const initialList =
    props.params &&
    props.params.page &&
    prefix + props.params.page.replaceAll(delimiter[1], delimiter[0]);

  const [list, setList] = useState(initialList);

  function updateList(key) {
    if (props.path) {
      const rootPath = RouterUtils.makeRootPath(props.path);

      const newList = key
        .replace(prefix, "")
        .replaceAll(delimiter[0], delimiter[1]);

      history.push(rootPath + "/" + newList);
    }

    setList(key);
  }

  return { count_notifications_new, count_new_total, list, updateList };
}

export default useNotificationsState;
