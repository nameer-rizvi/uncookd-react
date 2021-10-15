import { font } from "../../../shared";

const defaultFontFamily = font.configs.find(({ isDefault }) => isDefault).key;

function WriteEditorFormState({
  handleChange,
  name,
  write_autosave,
  WriteEditorSaveOnDebounce,
  values,
}) {
  function onTextChange(rich_text) {
    handleChange({ [name]: rich_text, ignoreAsync: true });
    if (write_autosave) WriteEditorSaveOnDebounce();
  }

  const onFontSelect = (font_family) => handleChange({ font_family });

  const WriteEditorFormStateHandle = { onTextChange, onFontSelect };

  const WriteEditorFormStateValue = {
    rich_text: values[name],
    font_family: values.font_family || defaultFontFamily,
  };

  return { WriteEditorFormStateHandle, WriteEditorFormStateValue };
}

export default WriteEditorFormState;
