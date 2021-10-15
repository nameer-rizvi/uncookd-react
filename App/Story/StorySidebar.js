import React from "react";
import StorySidebarStyled from "./StorySidebarStyled";
import StorySidebarTitle from "./StorySidebarTitle";
import StorySidebarAuthor from "./StorySidebarAuthor";
import StorySidebarDescription from "./StorySidebarDescription";
import StorySidebarHashtags from "./StorySidebarHashtags";
import StorySidebarRibbons from "./StorySidebarRibbons";
import StorySidebarDelete from "./StorySidebarDelete";
import StorySidebarFeed from "./StorySidebarFeed";
import { FlexBox, BoxAfter } from "../Element";

const StorySidebar = ({ data = {}, history, ...rest }) => (
  <StorySidebarStyled>
    <StorySidebarTitle title={data.title} slug={data.slug} history={history} />
    <StorySidebarAuthor {...data} />
    <StorySidebarDescription description={data.description} />
    <StorySidebarHashtags index={data.index} hashtags={data.hashtags} />
    <FlexBox $row $align="baseline" $justify="space-between">
      <StorySidebarRibbons {...data} />
      <StorySidebarDelete {...data} />
    </FlexBox>
    <StorySidebarFeed history={history} data={data} {...rest} />
    <BoxAfter />
  </StorySidebarStyled>
);

export default StorySidebar;
