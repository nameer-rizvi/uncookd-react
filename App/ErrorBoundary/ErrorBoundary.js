import React, { Component } from "react";
import { isEnv } from "simpul";
import ErrorBoundaryProd from "./ErrorBoundaryProd";
import ErrorBoundaryDev from "./ErrorBoundaryDev";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError = (error) => ({ error });

  render() {
    const { error } = this.state;
    return error && isEnv.live ? (
      <ErrorBoundaryProd error={error} />
    ) : error && !isEnv.live ? (
      <ErrorBoundaryDev error={error} />
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;

// https://reactjs.org/docs/error-boundaries.html
