import React from "react";
import useHomeReducer from "./HomeReducer";
import useHomeHTMLDocument from "./HomeHTMLDocument";
import { FlexBox } from "../Element";
import { HomeContainer, HomeMetaContainer } from "./HomeStyled";
import HomeNotices from "./HomeNotices";
import HomeMetaHeaderDescriptPre from "./HomeMetaHeaderDescriptPre";
import HomeMetaHeaderTitle from "./HomeMetaHeaderTitle";
import HomeMetaHeaderDescriptPost from "./HomeMetaHeaderDescriptPost";
import HomeMetaCounts from "./HomeMetaCounts";
import HomeMetaSubscribeButton from "./HomeMetaSubscribeButton";
import HomeMetaDetail from "./HomeMetaDetail";
import HomeFeed from "./HomeFeed";

function Home(props) {
  const reducer = useHomeReducer(props);

  useHomeHTMLDocument(reducer, props.params);

  return (
    <FlexBox $grow>
      <HomeNotices notices={reducer.notices} />
      <HomeContainer id="home-page">
        <HomeMetaContainer className="home-meta container-padding">
          <HomeMetaHeaderDescriptPre params={props.params} />
          <div style={{ position: "relative" }}>
            <HomeMetaHeaderTitle title={reducer.title} />
            <HomeMetaHeaderDescriptPost
              isLoggedIn={props.isLoggedIn}
              filter2={props.params.filter2}
              isDefault={reducer.isDefault}
            />
          </div>
          <HomeMetaCounts {...reducer} />
          <HomeMetaSubscribeButton {...reducer} />
          <HomeMetaDetail {...reducer} isLoggedIn={props.isLoggedIn} />
        </HomeMetaContainer>
        <HomeFeed {...props} {...reducer} />
      </HomeContainer>
    </FlexBox>
  );
}

export default Home;
