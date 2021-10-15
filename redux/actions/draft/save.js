// * Values in newDraft constant: id, title, description, rich_text_story_substring, last_saved_at...
//   need to match select list in "/express/utils/mysql/draft/selectList.js".

import { store } from "../../store";
import { label } from "../../../../shared";
import { componentDataUpdateAssign } from "../componentDataUpdateAssign";

function draftSave({
  responseData: { id: newId },
  handleChange: updateFormValues,
  formValues,
}) {
  let { formProps = {}, drafts = [] } = store.getState().componentData.write;

  // If newId exists, update formValues for form state, update
  // formValues param for further use, and update formProps for
  // for write component state.

  if (newId) {
    updateFormValues({ id: newId });
    formValues.id = newId;
    formProps = { ...formProps, initialValues: { id: newId } };
  }

  // Create new draft object for drafts list update.

  const newDraft = {
    content_type: "story_article",
    id: formValues.id,
    title: formValues.title,
    description: label.description(formValues),
    last_saved_at: new Date(),
  };

  // See if a previous version of draft object exists in drafts list.

  const draftIndex = drafts.findIndex((draft) => draft.id === newDraft.id);

  // If a previous version exists, update it,
  // otherwise, unshift new draft object into drafts list.

  if (draftIndex === -1) {
    drafts.unshift(newDraft);
  } else drafts[draftIndex] = newDraft;

  // Update write component state.

  componentDataUpdateAssign({ write: { formProps, drafts } });
}

export default draftSave;
