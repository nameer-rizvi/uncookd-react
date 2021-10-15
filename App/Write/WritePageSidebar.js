import React, { useEffect } from "react";
import WritePageSidebarDrafts from "./WritePageSidebarDrafts";

function useWritePageSidebar({ page, hasDrafts }) {
  const Sidebar = {
    show: () => page.setSidebar(<WritePageSidebarDrafts page={page} />),
    hide: () => page.setSidebar(),
  };

  useEffect(() => {
    if (hasDrafts) Sidebar.show();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!hasDrafts) Sidebar.hide();
  }, [hasDrafts]); // eslint-disable-line react-hooks/exhaustive-deps

  return Sidebar;
}

export default useWritePageSidebar;
