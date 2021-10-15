import React from "react";
import { P } from "../Element";

function HomeMetaHeaderDescriptPre({ params }) {
  const intro = "showing";

  const filter =
    params.sort === "top" &&
    params.filter &&
    (params.filter === "all time" ? params.filter : params.filter + "'s");

  const sort = params.sort ? params.sort : "trending";

  const descriptPre = [intro, filter, sort].filter(Boolean).join(" ");

  return (
    <P className="home-meta-header-description" id="pre">
      {descriptPre}
    </P>
  );
}

export default HomeMetaHeaderDescriptPre;
