import React, { useState } from "react";
import { useRouteProperties, useEventListener } from "../../hooks";
import BackToTopStyled from "./BackToTopStyled";

function BackToTop() {
  const { isPage, hasFeed } = useRouteProperties();

  const [showButton, setShowButton] = useState(false);

  useEventListener("scroll", () => {
    const windowHeight =
      window.innerHeight ||
      document.body.clientHeight ||
      document.documentElement.clientHeight;

    const scrollPosition =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (windowHeight / 2 < scrollPosition) {
      setShowButton(true);
    } else setShowButton(false);
  });

  if (!isPage && hasFeed && showButton) {
    const ButtonProps = {};

    ButtonProps.name = "back_to_top";

    ButtonProps.title = "Scroll back to top of window.";

    ButtonProps.children = "back to top";

    ButtonProps.onClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return <BackToTopStyled {...ButtonProps} />;
  } else return null;
}

export default BackToTop;
