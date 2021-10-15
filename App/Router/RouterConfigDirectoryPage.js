import React from "react";
import RouterViewAccess from "./RouterViewAccess";
import { makeRootPath } from "./RouterUtils";
import { Button, FlexBox, H2, P, Nav } from "../Element";

function RouterConfigDirectoryPage({ isLoggedIn, routes, HTMLDocument }) {
  routes = routes.filter((route) => RouterViewAccess(route, isLoggedIn));

  const style = { marginTop: "1em" };

  const makeButtonProps = (route, index) => ({
    key: index,
    to: makeRootPath(route.path),
    title: route.description,
    $underline: true,
    initialStyle: true,
  });

  const NavItems = routes.map((route, index) => (
    <Button {...makeButtonProps(route, index)}>
      {route.description.slice(0, -1)} at {makeRootPath(route.path)}.
    </Button>
  ));

  return (
    <FlexBox>
      <H2>{HTMLDocument.title} Directory</H2>
      <P style={style}>{HTMLDocument.description.slice(0, -1)}:</P>
      <Nav id="directory" ul="OL_1" style={{ li: style }} items={NavItems} />
    </FlexBox>
  );
}

export default RouterConfigDirectoryPage;
