import { store } from "../../store";
import { generateKey } from "simpul";
import { componentDataUpdateAssign } from "../componentDataUpdateAssign";

function draftDelete({ id, resetPageNumber }) {
  let { formProps = {}, drafts = [] } = store.getState().componentData.write;

  // Clear form state if draft.

  if (formProps.initialValues && formProps.initialValues.id === id) {
    formProps = { key: generateKey() };
    resetPageNumber();
  }

  // Filter draft from drafts list.

  drafts = drafts.filter((draft) => draft.id !== id);

  // Update component state.

  componentDataUpdateAssign({ write: { formProps, drafts } });
}

export default draftDelete;
