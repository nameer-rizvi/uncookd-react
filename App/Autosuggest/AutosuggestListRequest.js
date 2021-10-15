import { request } from "../../utils";
import { useCallback, useEffect } from "react";
import debounce from "debounce";
import { isEnv } from "simpul";
import { validate } from "../../../shared";

function useAutosuggestListRequest({
  inputName,
  includeCaption,
  setRows,
  reset,
  inputValue,
  setQ,
  ...requestProps
}) {
  const getList = (sanitizedQ) =>
    request({
      ...requestProps,
      allowAnonymousRequest: true,
      method: "GET",
      url: "/search/autosuggest",
      params: { ...sanitizedQ, q_source: inputName, q_caption: includeCaption },
      onSuccess: setRows,
      onFail: reset,
    });

  const getListOnDebounce = useCallback(debounce(getList, 400), []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (inputValue)
      validate({ q: setQ ? setQ(inputValue) : inputValue })
        .then((sanitizedQ) => {
          requestProps.setPending(true);
          setRows();
          getListOnDebounce(sanitizedQ);
        })
        .catch((warning) => {
          if (!isEnv.live) console.warn(warning);
          reset();
        });
  }, [inputValue]); // eslint-disable-line react-hooks/exhaustive-deps
}

export default useAutosuggestListRequest;
