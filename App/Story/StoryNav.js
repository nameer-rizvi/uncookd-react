import React, { useEffect } from "react";
import StorySidebar from "./StorySidebar";

function useStoryNav(props) {
  const { history, data, page, params } = props;

  useEffect(() => {
    const openSidebar = {
      name: "open_story_sidebar",
      title: "Open story sidebar.",
      svg: "ellipses",
      onClick: () => history.push(`/story/${data.slug}/comments`),
    };

    page.setNavButtons([openSidebar]);

    page.setSidebarOnClose({ to: `/story/${data.slug}` });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (params.list) {
      page.setSidebar(<StorySidebar {...props} />);
    } else page.setSidebar();

    return () => page.setSidebar();
  }, [params]); // eslint-disable-line react-hooks/exhaustive-deps
}

export default useStoryNav;
