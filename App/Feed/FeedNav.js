import React from "react";
import FeedNavMapLinkProps from "./FeedNavMapLinkProps";
import FeedNavStyled from "./FeedNavStyled";
import {
  UL,
  UL_1,
  UL_2,
  UL_3,
  UL_3_BlackBar,
  UL_3_GrayItalic,
  UL_3_RadioButton,
  UL_3_WideUnderline,
  LI,
  LI_1,
  LI_2,
  LI_3,
  Button,
} from "../Element";

function FeedNav({
  linkSets,
  keys,
  params,
  path,
  includeURLParams,
  linkLabels,
  $stylePreset,
  uls = [],
  lis = [],
  activeLinkSetIndex,
  $stackBreakpoints = [],
  ...rest
}) {
  linkSets = FeedNavMapLinkProps(
    linkSets,
    keys,
    params,
    path,
    includeURLParams,
    linkLabels
  );

  return (
    <FeedNavStyled id="feed-nav" $stylePreset={$stylePreset}>
      {uls.map((ul = "UL_3", ulIndex) => {
        const ULContainer = {
          UL,
          UL_1,
          UL_2,
          UL_3,
          UL_3_BlackBar,
          UL_3_GrayItalic,
          UL_3_RadioButton,
          UL_3_WideUnderline,
        }[ul];

        const LIContainer = { LI, LI_1, LI_2, LI_3 }[lis[ulIndex] || "LI_2"];

        const ULClassName = `feed-nav-list ${ulIndex} ${keys[ulIndex]}`;

        const links = ulIndex
          ? linkSets[activeLinkSetIndex][ulIndex]
          : linkSets.map((linkSet) => linkSet[ulIndex || 0]);

        return links && links.length ? (
          <ULContainer
            key={ulIndex}
            className={ULClassName}
            $stackBreakpoint={$stackBreakpoints[ulIndex]}
          >
            {links.map(({ value, ...link }, linkIndex) => (
              <LIContainer
                key={linkIndex}
                className={params[keys[ulIndex]] === value ? "active" : ""}
              >
                <Button {...link} />
              </LIContainer>
            ))}
          </ULContainer>
        ) : null;
      })}
    </FeedNavStyled>
  );
}

export default FeedNav;
