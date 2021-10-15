import React from "react";
import GetComponent from "../GetComponent";
import Story from "./Story";

const StoryGet = (props) => (
  <GetComponent
    componentName="story"
    Component={Story}
    requestProps={{
      allowAnonymousRequest: true,
      requestCondition: Boolean(props.params.slug),
      url: "/story",
      params: { slug: props.params.slug },
    }}
    {...props}
  />
);

export default StoryGet;

// To persist data:
//
// import { useSelector } from "react-redux";
//
// const { slug: currentSlug } = useSelector(
//   (state) => state.componentData[componentName]
// );
//
// GetComponent.refreshData={props.params.slug !== currentSlug}
// GetComponent.persistData
