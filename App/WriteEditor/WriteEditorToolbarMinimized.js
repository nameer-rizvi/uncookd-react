import React from "react";
import { joinAttr } from "../../utils";
import { Button } from "../Element";
import WriteEditorToolbarMessage from "./WriteEditorToolbarMessage";

const WriteEditorToolbarMinimized = ({
  className,
  showFullToolbar,
  WriteEditorSaveButton,
  message,
}) => (
  <div className={joinAttr.className(["minimized", className])}>
    <Button
      svg="font"
      name="open_editor_toolbar"
      title="Open editor toolbar."
      className="toolbar-custom"
      onClick={showFullToolbar}
    />
    <Button className="toolbar-custom" {...WriteEditorSaveButton} />
    <WriteEditorToolbarMessage message={message} />
  </div>
);

export default WriteEditorToolbarMinimized;
