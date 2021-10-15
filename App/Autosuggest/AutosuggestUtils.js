const listItemClassName = "autosuggest-list-item";

const AutosuggestUtils = {
  getInputElement: (inputId) => inputId && document.getElementById(inputId),
  getListElements: () => document.getElementsByClassName(listItemClassName),
  makeListItemClassName: (index) => [listItemClassName, index].join(" "),
  listItemClassName,
};

export default AutosuggestUtils;
