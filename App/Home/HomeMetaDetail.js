import React, { useContext } from "react";
import HomeMetaDetailCTA from "./HomeMetaDetailCTA";
import HomeMetaDetailHashtags from "./HomeMetaDetailHashtags";
import HomeMetaDetailSitemap from "./HomeMetaDetailSitemap";
import { ViewportContext } from "../Viewport";
import { useToggleMulti } from "../../hooks";
import { FlexBox } from "../Element";
import HomeMetaDetailButtons from "./HomeMetaDetailButtons";

function HomeMetaDetail(props) {
  const configs = [
    !props.isLoggedIn && { name: "login", Component: HomeMetaDetailCTA },
    { name: "hashtag", Component: HomeMetaDetailHashtags },
    { name: "sitemap", Component: HomeMetaDetailSitemap },
  ].filter(Boolean);

  const { breakpointIndex } = useContext(ViewportContext);

  const initialToggleState = configs
    .filter(({ name }) => breakpointIndex >= 14)
    .map(({ name }) => name);

  const toggle = useToggleMulti(initialToggleState);

  return (
    <FlexBox id="home-meta-detail">
      <HomeMetaDetailButtons configs={configs} toggle={toggle} />
      {configs.map(({ name, Component: HomeMetaDetailComponent }) =>
        toggle.state(name) ? (
          <HomeMetaDetailComponent key={name} {...props} />
        ) : null
      )}
    </FlexBox>
  );
}

export default HomeMetaDetail;
