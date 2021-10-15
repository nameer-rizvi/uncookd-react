import { useEffect } from "react";
import Quill from "quill";
import QuillUtil from "./QuillUtil";
import sanitized from "sanitized";
import QuillInitializeSelection from "./QuillInitializeSelection";

function QuillInitialize({
  rich_text,
  onTextChange,
  useSelection,
  page,
  ...configuration
}) {
  useEffect(() => {
    if (!configuration.theme) configuration.theme = "snow";

    const quill = new Quill("#" + QuillUtil.id.container, configuration);

    if (quill) {
      quill.root.setAttribute("spellcheck", false);

      if (rich_text) {
        const delta = quill.clipboard.convert(sanitized(rich_text));
        quill.setContents(delta, "silent");
      }

      if (onTextChange)
        quill.on("text-change", () => onTextChange(QuillUtil.getInnerHTML()));

      return QuillInitializeSelection({ useSelection, page, quill });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
}

export default QuillInitialize;

// Unused configuration props from React-Quill:
//
// preserveWhitespace: true, modules.clipboard: { matchVisual: false }.
