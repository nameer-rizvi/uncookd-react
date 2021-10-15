import React, { useState } from "react";
import { useRequestState } from "../../hooks";
import { request } from "../../utils";
import Tooltip from "./Tooltip";
import Loader from "../Loader";

function TooltipButtonRequest({ hover, api, id, Template, ...initialProps }) {
  const [props, setProps] = useState(initialProps);

  const requestState = useRequestState();

  function afterShow() {
    hover.update({ tooltip: true });

    const params = api.paramKeys.reduce(
      (reducer, paramKey) => ({ ...reducer, [paramKey]: props[paramKey] }),
      {}
    );

    const hasRequestKeys = Boolean(
      params.requestKeys && params.requestKeys.length
    );

    const onSuccess = (responseData) =>
      setProps((curr) => ({ ...curr, ...responseData }));

    request({
      requestCondition: hasRequestKeys,
      allowAnonymousRequest: true,
      method: "GET",
      url: api.url + "/tooltip",
      params,
      onSuccess,
      ...requestState,
    });
  }

  const afterHide = () => hover.update({ tooltip: false });

  return (
    <Tooltip id={id} afterShow={afterShow} afterHide={afterHide} persist>
      {requestState.pending ? <Loader alt /> : <Template {...props} />}
    </Tooltip>
  );
}

export default TooltipButtonRequest;
