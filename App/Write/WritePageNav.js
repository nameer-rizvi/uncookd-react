import { useEffect } from "react";

const useWritePageNav = ({ hasDrafts, Sidebar, page }) =>
  useEffect(() => {
    const drafts = hasDrafts && {
      name: "show_drafts",
      title: "Show drafts.",
      svg: "draft",
      onClick: Sidebar.show,
    };

    const navigation =
      page.number === 0
        ? {
            name: "next_page",
            title: "Go to next page.",
            svg: "next_1",
            onClick: () => page.setNumber(1),
          }
        : page.number === 1
        ? {
            name: "previous_page",
            title: "Go to previous page.",
            svg: "previous_1",
            onClick: () => page.setNumber(0),
          }
        : null;

    page.setNavButtons([drafts, navigation]);
  }, [hasDrafts, page.number]); // eslint-disable-line react-hooks/exhaustive-deps

export default useWritePageNav;
