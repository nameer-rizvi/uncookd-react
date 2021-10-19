import React, { useEffect } from "react";
import { URLQuery } from "../../utils";
import { request } from "../../utils";
import ErrorBoundaryStyled from "./ErrorBoundaryStyled";
import { name, url } from "../../../shared";

function ErrorBoundaryProd({ error }) {
  const isChunkLoadError = error && error.name === "ChunkLoadError";

  const params = URLQuery.get();

  useEffect(() => {
    if (isChunkLoadError) {
      if (!params.reloaded) {
        params.reloaded = true;
        window.location = window.location.pathname + URLQuery.generate(params);
      }
    } else if (error)
      request({
        allowAnonymousRequest: true,
        method: "POST",
        url: "/app/error",
        data: {
          error: {
            pathname: window.location.pathname + window.location.search,
            message: error.message,
            stack: error.stack,
          },
        },
      });
  }, [error]); // eslint-disable-line react-hooks/exhaustive-deps

  return isChunkLoadError && !params.reloaded ? null : (
    <ErrorBoundaryStyled className="production-error">
      <h1>Oh no! Oh no! Oh... KA-BOOOM!</h1>
      <h2>
        We're sorry to report that the application has temporarily gone bust.
      </h2>
      <h3>
        But do not worry! Whatever caused this has been logged for our excellent
        dev team to take a look at.
      </h3>
      <h3>
        "We'll assess what went wrong and try to fix it as soon as possible,"
        said {name.main}'s excellent dev team.
      </h3>
      <h4>
        (In the off chance this was something very minor, see if refreshing the
        page might help... Otherwise, please come back at a later time!)
      </h4>
      <a
        title={`Go to ${name.main}'s uptime status page.`}
        href={url.status}
        target="_blank"
        rel="noreferrer"
      >
        Click here to see if our services are still running.
      </a>
    </ErrorBoundaryStyled>
  );
}

export default ErrorBoundaryProd;
