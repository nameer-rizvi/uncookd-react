import React from "react";
import ErrorBoundaryStyled from "./ErrorBoundaryStyled";

const ErrorBoundaryDev = ({ error }) => (
  <ErrorBoundaryStyled>
    <h1>React Error</h1>
    <h2>{error.message}</h2>
    <pre>{error.stack}</pre>
  </ErrorBoundaryStyled>
);

export default ErrorBoundaryDev;
