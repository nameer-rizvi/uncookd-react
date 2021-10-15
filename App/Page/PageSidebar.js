import React, { useState } from "react";
import { ButtonSimulateClick } from "../Element";
import Sidebar from "../Sidebar";

function usePageSidebar() {
  const [sidebar, setSidebar] = useState();
  const [sidebarOnClose, setSidebarOnClose] = useState();

  const SidebarProps = {
    id: "page",
    show: Boolean(sidebar),
    children: sidebar,
    close: () => {
      setSidebar();
      if (sidebarOnClose)
        setTimeout(() => ButtonSimulateClick(sidebarOnClose), 250); // Wait for sidebar to close.
    },
  };

  return {
    setSidebar,
    setSidebarOnClose,
    Sidebar: <Sidebar {...SidebarProps} />,
  };
}

export default usePageSidebar;
