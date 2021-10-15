import React from "react";
import { topFilterConfigs } from "../../../shared";
import { isArray } from "simpul";
import ResponsiveLabel from "../ResponsiveLabel";

function HomeFeedResponsiveLabels() {
  const topFilterSVGs = topFilterConfigs.map((config) => ({
    name: "star2",
    match: config.label,
    fill: config.color.border,
  }));

  const linkSVGs = [
    [{ name: "fire" }],
    [{ name: "star2" }, topFilterSVGs],
    [{ name: "new_release" }],
  ];

  const linkLabels = linkSVGs.map((linkSVGs2) =>
    linkSVGs2.map((linkSVG) => (link, linkSetIndex, linkIndex) => {
      const svg = isArray(linkSVG)
        ? linkSVGs[linkSetIndex][linkIndex][
            linkSVG.findIndex((svg) => svg.match === link)
          ]
        : linkSVGs[linkSetIndex][linkIndex];

      return svg ? <ResponsiveLabel svg={svg} label={link} /> : link;
    })
  );

  return linkLabels;
}

export default HomeFeedResponsiveLabels;
