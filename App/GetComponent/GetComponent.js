import React, { useEffect } from "react";
import { connect } from "react-redux";
import { isObjectValid } from "simpul";
import { useRequestState } from "../../hooks";
import { componentDataInitialState, componentDataUpdate } from "../../redux";
import { request } from "../../utils";
import GetComponentRender from "./GetComponentRender";

function GetComponent({
  componentName,
  requestProps,
  persistData,
  data,
  dispatch,
  refreshData,
  Component,
  ...rest
}) {
  if (!componentName) console.warn("Missing 'componentName'.");

  const failedRequestCondition = requestProps.requestCondition === false;

  const hasStaleData = persistData && isObjectValid(data);

  const initiateRequest = !failedRequestCondition && !hasStaleData;

  const requestState = useRequestState({ initialPending: initiateRequest });

  const dispatchUpdate = (update = componentDataInitialState[componentName]) =>
    dispatch(componentDataUpdate({ [componentName]: update }));

  const requestComponent = () =>
    request({
      method: "GET",
      onSuccess: dispatchUpdate,
      onFail: () => dispatchUpdate(),
      ...requestProps,
      ...requestState,
    });

  useEffect(() => {
    if (initiateRequest) requestComponent();
  }, [failedRequestCondition]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (refreshData && hasStaleData) requestComponent();
  }, [refreshData]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    return () => {
      if (requestState.cancelSource.cancel) requestState.cancelSource.cancel();
      if (!persistData) dispatchUpdate();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <GetComponentRender
      failedRequestCondition={failedRequestCondition}
      pending={requestState.pending}
      error={requestState.error}
      requestComponent={requestComponent}
      data={data}
      Component={Component}
      {...rest}
    />
  );
}

const mapStateToProps = (state, ownProps) => ({
  key: ownProps.key || ownProps.componentName,
  data: state.componentData[ownProps.componentName] || {},
});

export default connect(mapStateToProps)(GetComponent);
