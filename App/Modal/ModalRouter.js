import React from "react";
import { useSelector } from "react-redux";
import { RouterConfig } from "../Router";
import Loadable from "../Loadable";

function ModalRouter({ location, ...rest }) {
  const { isLoggedIn } = useSelector((state) => state.user);

  const { ComponentModal, ComponentLazy, Component } = RouterConfig(
    location,
    isLoggedIn
  );

  return ComponentModal ? (
    <ComponentModal {...rest} />
  ) : ComponentLazy ? (
    <Loadable Component={ComponentLazy} {...rest} />
  ) : Component ? (
    <Component {...rest} />
  ) : null;
}

export default ModalRouter;
