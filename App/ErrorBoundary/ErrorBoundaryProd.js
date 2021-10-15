import React, { useEffect } from "react";
import Bowser from "bowser";
import { request } from "../../utils";
import ErrorBoundaryStyled from "./ErrorBoundaryStyled";
import { name } from "../../../shared";

function ErrorBoundaryProd({ error }) {
  const isChunkLoadError = error && error.name === "ChunkLoadError";

  useEffect(() => {
    if (isChunkLoadError) {
      window.location.reload();
    } else if (error) {
      const userAgent = Bowser.getParser(window.navigator.userAgent)
        .parsedResult;

      const errorData = {
        pathname: window.location.pathname + window.location.search,
        message: error.message,
        stack: error.stack,
        browser_name: userAgent.browser && userAgent.browser.name,
        browser_version: userAgent.browser && userAgent.browser.version,
        device_platform: userAgent.platform && userAgent.platform.type,
      };

      request({
        allowAnonymousRequest: true,
        method: "POST",
        url: "/app/error",
        data: { error: errorData },
      });
    }
  }, [error]); // eslint-disable-line react-hooks/exhaustive-deps

  return isChunkLoadError ? null : (
    <ErrorBoundaryStyled style={{ textAlign: "center", maxWidth: 600 }}>
      <h1>Kaboom!</h1>
      <h2>
        We're sorry to report that the application has temporarily gone bust.
      </h2>
      <small>(Duh duh duhhhhhhhhhhh...)</small>
      <h3>
        But do not worry! Whatever caused this has been logged for our excellent
        dev team to take a look.
      </h3>
      <h3>
        "We'll assess what went wrong and try to fix it as soon as possible,"
        said {name.main}'s dev team.
      </h3>
      <h4>
        (In the off chance this was something very minor, see if refreshing the
        page might help... Otherwise, please come back at a later time!)
      </h4>
    </ErrorBoundaryStyled>
  );
}

export default ErrorBoundaryProd;
