import React from "react";
import { useToggle } from "../../hooks";
import WriteEditorToolbarStyled from "./WriteEditorToolbarStyled";
import WriteEditorToolbarMinimized from "./WriteEditorToolbarMinimized";
import WriteEditorToolbarFull from "./WriteEditorToolbarFull";

// Documentation: https://quilljs.com/docs/modules/toolbar/

function WriteEditorToolbar({ font, WriteEditorSaveButton, message }) {
  const id = "editor-toolbar";

  const WriteEditorToolbarModule = {
    toolbar: {
      container: "#" + id,
      handlers: { font: font.handler },
    },
  };

  // Component
  //
  // As opposed to using a truly "toggle" component that
  // only renders when the toggle condition is "true", we
  // have to use a "hide" className as well as some css,
  // for "display: none." ...Quill's toolbar needs to be
  // mounted on page load.

  const toggle = useToggle();

  const WriteEditorToolbarComponent = (
    <WriteEditorToolbarStyled id={id}>
      <WriteEditorToolbarMinimized
        className={toggle.state ? "hide" : ""}
        showFullToolbar={toggle.change}
        WriteEditorSaveButton={WriteEditorSaveButton}
        message={message}
      />
      <WriteEditorToolbarFull
        className={toggle.state ? "" : "hide"}
        showMinimizedToolbar={toggle.change}
        fontValue={font.value}
        message={message}
      />
    </WriteEditorToolbarStyled>
  );

  return { WriteEditorToolbarModule, WriteEditorToolbarComponent };
}

export default WriteEditorToolbar;
