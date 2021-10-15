import React from "react";
import NotFound from "../NotFound";
import Loader from "../Loader";
import { FlexBox } from "../Element";
import { parseErrorString } from "../../utils";
import Retry from "../Retry";
import { isObjectValid } from "simpul";

function GetComponentRender({
  failedRequestCondition,
  error,
  renderError,
  pending,
  requestComponent,
  data,
  Component,
  ...rest
}) {
  const errorString = (error && error.toString()) || "";

  const isNotFoundError =
    failedRequestCondition ||
    (errorString.includes("403") || errorString.includes("404"));

  return isNotFoundError ? (
    <NotFound />
  ) : pending ? (
    <Loader />
  ) : error ? (
    errorString.includes("429") || renderError ? (
      <FlexBox $grow $justify="center" $align="center">
        {parseErrorString(error)}
      </FlexBox>
    ) : (
      <Retry get={requestComponent} />
    )
  ) : isObjectValid(data) ? (
    <Component data={data} {...rest} />
  ) : null;
}

export default GetComponentRender;
