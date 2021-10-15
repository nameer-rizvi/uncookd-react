import { request } from "../../../utils";
import { generateKey, removeNullValues } from "simpul";
import { componentDataUpdateAssign } from "../componentDataUpdateAssign";

function draftGet({ id, requestState, resetPage }) {
  function updateWriteState(draft) {
    // Insert valid draft values into new formProps as initialValues.

    const formProps = {
      key: generateKey(),
      initialValues: removeNullValues(draft),
    };

    // Update component state.

    componentDataUpdateAssign({ write: { formProps } });

    // Reset page state.

    resetPage();
  }

  // If id is requested, fetch draft from server, else reset write component state.

  if (id) {
    request({
      url: "/draft",
      method: "GET",
      params: { id },
      onSuccess: updateWriteState,
      ...requestState,
    });
  } else updateWriteState();
}

export default draftGet;
