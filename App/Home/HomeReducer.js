import { useRequestState } from "../../hooks";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { componentDataUpdateAssign } from "../../redux";
import { request } from "../../utils";

function useHomeReducer({ params }) {
  const requestState = useRequestState();

  const reducer = useSelector((state) => state.componentData.home);

  useEffect(() => {
    requestState.allowAnonymousRequest = true;

    requestState.method = "GET";

    requestState.url = "/home";

    requestState.params = {
      hashtag: params.hashtag,
      excludeKeys: [],
    };

    if (Object.keys(reducer).includes("hashtag_recommendations"))
      requestState.params.excludeKeys.push("hashtag_recommendations");

    requestState.onSuccess = (update) =>
      componentDataUpdateAssign({ home: update });

    request(requestState);
  }, [params.hashtag]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    pending: requestState.pending,
    error: requestState.error,
    ...reducer,
  };
}

export default useHomeReducer;
