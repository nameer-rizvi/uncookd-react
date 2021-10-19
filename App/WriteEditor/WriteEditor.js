import React, { Fragment } from "react";
import WriteEditorSave from "./WriteEditorSave";
import WriteEditorFormState from "./WriteEditorFormState";
import WriteEditorToolbar from "./WriteEditorToolbar";
import Quill from "../Quill";

function WriteEditor({
  saveButton,
  setOnSubmitConfig,
  disabled,
  handleChange,
  name,
  write_autosave,
  values,
  postStatus,
  errors,
  page,
  placeholder,
}) {
  // Save.

  const { WriteEditorSaveOnDebounce, WriteEditorSaveButton } = WriteEditorSave({
    saveButton,
    page,
    setOnSubmitConfig,
    disabled,
  });

  // Form State.

  const {
    WriteEditorFormStateHandle,
    WriteEditorFormStateValue,
  } = WriteEditorFormState({
    handleChange,
    name,
    write_autosave,
    WriteEditorSaveOnDebounce,
    values,
  });

  // Custom Toolbar.

  const {
    WriteEditorToolbarModule,
    WriteEditorToolbarComponent,
  } = WriteEditorToolbar({
    font: {
      handler: WriteEditorFormStateHandle.onFontSelect,
      value: WriteEditorFormStateValue.font_family,
    },
    WriteEditorSaveButton,
    message: postStatus || errors[name],
  });

  // Quill.

  const QuillProps = {
    page,
    placeholder,
    modules: WriteEditorToolbarModule,
    onTextChange: WriteEditorFormStateHandle.onTextChange,
    useSelection: true,
    ...WriteEditorFormStateValue,
  };

  // Render.

  return (
    <Fragment>
      {WriteEditorToolbarComponent}
      <Quill {...QuillProps} />
    </Fragment>
  );
}

export default WriteEditor;
