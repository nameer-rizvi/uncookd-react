// If considering Axios vs. Fetch:
//
// Research concludes that Axios is the better choice for the
// following reasons:
//
// - Built-in XSRF protection.
// - Request cancelation API.
// - Interceptors.
// - Wider browser support.
//
// If considering an async function, like useAsyncFetch():
//
// The function needs to be able to POST, and using something
// like useAsyncFetch(), which uses hooks, is unviable for that
// if being called from inside a regular callback function.
// This is the most flexible solution, trust me!

import axios from "axios";
import { isEnv } from "simpul";
import { store } from "../redux";
import sanitized from "sanitized";

export function request({
  requestCondition,
  allowAnonymousRequest,
  cancelSource: activeCancelSource,
  setCancelSource,
  setPending,
  setError,
  onStart,
  onSuccess,
  onFail,
  onFinish,
  ...config
}) {
  if (!config.url) {
    if (!isEnv.live)
      console.warn("Missing 'url' for request with props: ", config);
  } else if (!config.method) {
    if (!isEnv.live)
      console.warn("Missing 'method' for request with props: ", config);
  } else if (requestCondition === false) {
    if (!isEnv.live) console.warn("Request condition is false.");
  } else {
    const requestHandler = {
      start: () => {
        if (onStart) onStart();
        if (setPending) setPending(true);
        if (setError) setError();
        if (activeCancelSource && activeCancelSource.cancel)
          activeCancelSource.cancel();
        const newCancelSource = axios.CancelToken.source();
        if (setCancelSource) setCancelSource(newCancelSource);
        return { cancelToken: newCancelSource.token };
      },
      success: (response) => {
        if (onSuccess) onSuccess(response.data);
      },
      fail: (error) => {
        if (!axios.isCancel(error)) {
          if (setError) setError(error);
          if (onFail) onFail(error);
        }
      },
      finish: () => {
        if (setPending) setPending();
        if (onFinish) onFinish();
      },
    };

    if (allowAnonymousRequest || store.getState().user.isLoggedIn) {
      const { cancelToken } = requestHandler.start();
      axios({ ...sanitized(config), cancelToken })
        .then(requestHandler.success)
        .catch(requestHandler.fail)
        .finally(requestHandler.finish);
    } else {
      requestHandler.fail("403: Request forbidden.");
      requestHandler.finish();
    }
  }
}
