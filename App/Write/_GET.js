import React from "react";
import GetComponent from "../GetComponent";
import Write from "./Write";

const WriteGet = (props) => (
  <GetComponent
    componentName="write"
    Component={Write}
    requestProps={{ url: "/draft/initialize" }}
    persistData
    {...props}
  />
);

export default WriteGet;
