import React, { useContext, Fragment } from "react";
import { ViewportContext } from "../Viewport";
import { isStringValid } from "simpul";
import { P } from "../Element";

function SearchFeedNavZeroState({ params, config, configs }) {
  const { device } = useContext(ViewportContext);

  if (isStringValid(params.q)) {
    return (
      <Fragment>
        <P>No results found.</P>
        <P>
          Try broadening your search by using less characters/words, or by using
          different keywords.
        </P>
      </Fragment>
    );
  } else {
    const helper =
      device === "desktop" ? "Use the search input" : "Click on the [s] button";

    const list = config
      ? config.plural
      : configs
          .map((config, index) =>
            index === configs.length - 1 ? "or " + config.plural : config.plural
          )
          .join(", ");

    return <P>{[helper, "to find", list].join(" ")}.</P>;
  }
}

export default SearchFeedNavZeroState;
