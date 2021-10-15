import React from "react";
import SiteAboutStyled from "./SiteAboutStyled";
import { H1_1, P, Dfn, H2_1 } from "../Element";
import { name, description } from "../../../shared";
import { capitalize } from "simpul";
import SiteAboutSVGChart from "./SiteAboutSVGChart";
import SiteAboutLinks from "./SiteAboutLinks";

const SiteAbout = () => (
  <SiteAboutStyled>
    <H1_1>{name.short}</H1_1>
    <P>
      <Dfn def={name.main}>{capitalize(name.main)}</Dfn> is a tiny little corner
      of the internet dedicated to storytellers & readers.
    </P>
    <H2_1>[storytellers]</H2_1>
    <P>
      Establish a writing career on a site that utilizes all of the best
      features social media has to offer in order to get your work noticed and
      trending.
    </P>
    <H2_1>[readers]</H2_1>
    <P>
      Enjoy some of the best stories circulating the internet and show
      appreciation for them by commenting on, liking or bookmarking those you
      really like.
    </P>
    <SiteAboutSVGChart />
    <P>{description.main}</P>
    <SiteAboutLinks />
  </SiteAboutStyled>
);

export default SiteAbout;
