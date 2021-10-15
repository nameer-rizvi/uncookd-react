const id = {
  container: "quill-container",
  editor: "ql-editor",
};

function getInnerHTML() {
  const element = document.getElementsByClassName(id.editor)[0];
  return element && element.innerHTML;
}

const QuillUtil = { id, getInnerHTML };

export default QuillUtil;
