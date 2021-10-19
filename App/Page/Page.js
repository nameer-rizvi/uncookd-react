import React, { useRef, useState, Fragment } from "react";
import usePageFullScreen from "./PageFullScreen";
import usePageClose from "./PageClose";
import usePageSidebar from "./PageSidebar";
import { Backdrop } from "../Element";
import PageNav from "./PageNav";
import PageStyled from "./PageStyled";

function Page({ Component, ...rest }) {
  const id = "page";

  const ref = useRef();

  const { FullScreenExit, FullScreenButton } = usePageFullScreen();

  const { close, CloseButton, setOnClose } = usePageClose({ FullScreenExit });

  const { setSidebar, setSidebarOnClose, Sidebar } = usePageSidebar();

  const [navButtons, setNavButtons] = useState([]);
  const [number, setNumber] = useState(0);
  const [position, setPosition] = useState();
  const [props, setProps] = useState({});

  const updateProps = (update) => setProps((curr) => ({ ...curr, ...update }));

  const ComponentPageProps = {
    id,
    ref,
    close,
    setOnClose,
    setSidebar,
    setSidebarOnClose,
    setNavButtons,
    number,
    setNumber,
    position,
    setPosition,
    props,
    updateProps,
  };

  return (
    <Fragment>
      {Sidebar}
      <Backdrop $zIndex="pageBackdrop">
        <PageNav buttons={[CloseButton, ...navButtons, FullScreenButton]} />
        <PageStyled id={id} ref={ref} {...props}>
          <Component page={ComponentPageProps} {...rest} />
        </PageStyled>
      </Backdrop>
    </Fragment>
  );
}

export default Page;
