import React from "react";
import { useSelector } from "react-redux";
import { componentDataUpdateAssign } from "../../redux";
import { useRequestState } from "../../hooks";
import { request } from "../../utils";
import { Span } from "../Element";
import FeedContentNextButton from "./FeedContentNextButton";
import FeedContentNextScroll from "./FeedContentNextScroll";

function FeedContentNext({
  componentName,
  requestProps,
  interruptionIndex,
  next,
  nextButton,
}) {
  const { rows: currentrows } = useSelector(
    (state) => state.componentData[componentName]
  );

  const updateComponent = (update) =>
    componentDataUpdateAssign({ [componentName]: update });

  const onSuccess = (responseData) =>
    updateComponent({
      ...responseData,
      next: responseData.next || "",
      rows: currentrows.concat(responseData.rows),
    });

  const onFail = () => updateComponent({ next: "" });

  const requestState = useRequestState();

  const getNext = () =>
    request({
      ...requestState,
      ...requestProps,
      requestCondition: !requestState.pending,
      method: "GET",
      params: { ...requestProps.params, interruptionIndex, next },
      onSuccess,
      onFail,
    });

  return (
    <Span style={{ marginTop: 30 }}>
      {nextButton ? (
        <FeedContentNextButton
          disabled={requestState.pending}
          onClick={getNext}
        />
      ) : (
        <FeedContentNextScroll getNext={getNext} />
      )}
    </Span>
  );
}

export default FeedContentNext;
