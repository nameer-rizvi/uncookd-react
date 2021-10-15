import React from "react";
import { UL_3, LI_3, SVG, SVGSize, Small } from "../Element";

const SiteAboutSVGChart = () => (
  <UL_3 className="about-svg-chart">
    {["comment", "like", "bookmark"].map((svg, index) => (
      <LI_3 key={index}>
        <SVG name={svg} {...(svg === "bookmark" ? SVGSize.l : SVGSize.xl)} />
        <Small $fontStyle="italic" style={{ marginTop: 15 }}>
          The {svg} {svg === "comment" ? "wreath" : "ribbon"}.
        </Small>
      </LI_3>
    ))}
  </UL_3>
);

export default SiteAboutSVGChart;
