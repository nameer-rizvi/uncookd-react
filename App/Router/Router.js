import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import RouterConfig from "./RouterConfig";
import { history } from "../../redux";
import { isString } from "simpul";
import { HTMLDocument } from "../../utils";
// import { elementId } from "../../../shared";
import Loadable from "../Loadable";

function Router(props) {
  const { pathname } = props.location;

  const { isLoggedIn } = useSelector((state) => state.user);

  const {
    redirect,
    disableHTMLDocumentUpdate,
    title,
    description,
    params,
    ComponentLazy,
    Component,
    ...config
  } = RouterConfig(pathname, isLoggedIn);

  // Redirect if redirect constant exists.

  useEffect(() => {
    if (redirect) history.push(redirect);
  }, [redirect]);

  // Declare document title and description

  useEffect(() => {
    if (!disableHTMLDocumentUpdate) {
      const getMetaData = (metaData) =>
        isString(metaData) ? metaData : metaData ? metaData(params) : null;
      HTMLDocument.updateTitle(getMetaData(title));
      HTMLDocument.updateDescription(getMetaData(description));
    }
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  // Scroll to top of new page.

  useEffect(() => {
    // const element = document.getElementById(elementId.feed);
    // const top = (element && element.offsetTop) || 0;
    // window.scrollTo({ top, behavior: "smooth" });
    window.scrollTo(0, 0);
  }, [pathname]);

  // Integrate params into props.

  props = {
    ...props,
    ...config,
    params,
    isLoggedIn,
    HTMLDocument: { title, description },
  };

  // Render component.

  return ComponentLazy ? (
    <Loadable Component={ComponentLazy} {...props} />
  ) : Component ? (
    <Component {...props} />
  ) : null;
}

export default Router;
