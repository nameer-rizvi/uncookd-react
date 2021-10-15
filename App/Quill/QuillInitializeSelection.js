import { noop } from "simpul";

function QuillInitializeSelection({ useSelection, page, quill }) {
  if (useSelection && page) {
    quill.focus();

    const selection =
      (page.position && page.position.selection) || quill.root.innerText.length;

    quill.setSelection(selection);

    return () => page.setPosition({ selection: quill.selection.lastRange });
  } else return noop;
}

export default QuillInitializeSelection;
