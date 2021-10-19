import { useEventListener } from "../../hooks";
import { useCallback, useEffect } from "react";
import { debounce } from "debounce";

function WriteEditorSave({ saveButton, page, setOnSubmitConfig, disabled }) {
  function save(e) {
    if (e) e.preventDefault();
    const button = document.getElementsByName(saveButton.name)[0];
    if (button) button.click();
  }

  useEventListener(
    "keydown",
    (e) => (e.metaKey || e.ctrlKey) && e.key === "s" && save(e)
  );

  const WriteEditorSaveOnDebounce = useCallback(debounce(save, 2000), []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    page.setOnClose(() => save);
  }, []); // eslint-disable-line

  const WriteEditorSaveButton = {
    type: "submit",
    svg: "save",
    title: saveButton.title + " Shortcut: command/control + s.",
    name: saveButton.name,
    onClick: () => setOnSubmitConfig(saveButton.onSubmit),
    disabled,
  };

  return { WriteEditorSaveOnDebounce, WriteEditorSaveButton };
}

export default WriteEditorSave;
