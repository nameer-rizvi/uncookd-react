import React, { useEffect, Fragment } from "react";
import { SidebarContainer, SidebarCore } from "./SidebarStyled";
import { Button, Backdrop } from "../Element";

function Sidebar({ show = false, id, close, ...rest }) {
  const SidebarProps = {
    open: show,
    in: show,
    id: id + "-sidebar",
    className: show ? "" : "empty",
    direction: "right",
  };

  const CloseButtonProps = {
    name: "close_sidebar",
    title: "Close sidebar.",
    svg: "close",
    onClick: close,
    $topRight: true,
  };

  const BackdropProps = {
    onClick: close,
    title: "Sidebar backdrop. Click to close sidebar.",
    $zIndex: "sidebarBackdrop",
    $opacity: 0.7,
  };

  useEffect(() => {
    if (show) {
      const element = document.getElementsByName(CloseButtonProps.name)[0];
      if (element) element.focus();
    }
  }, [show]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Fragment>
      <SidebarContainer {...SidebarProps}>
        <div>
          <Button {...CloseButtonProps} />
          <SidebarCore {...rest} />
        </div>
      </SidebarContainer>
      {show ? <Backdrop {...BackdropProps} /> : null}
    </Fragment>
  );
}

export default Sidebar;
