import AutosuggestUtils from "./AutosuggestUtils";

function AutosuggestOnBlur(e = {}, inputId, reset, customOnBlur, setValue) {
  const { id, className } = e.relatedTarget || {};

  const targetIsInput = id && id.includes(inputId);

  const targetIsListItem =
    className && className.includes(AutosuggestUtils.listItemClassName);

  if (!targetIsInput && !targetIsListItem) {
    setTimeout(() => {
      reset();
      if (customOnBlur) customOnBlur(e, setValue);
    }, 10); // Delay is required for Firefox & Safari, since the order of "focus --> blur" events is different.
  }
}

export default AutosuggestOnBlur;
