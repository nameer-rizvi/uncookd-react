import React from "react";
import { useSelector } from "react-redux";
import GetComponent from "../GetComponent";
import Profile from "./Profile";

function ProfileGet(props) {
  const componentName = "profile";

  const { username: currentUsername } = useSelector(
    (state) => state.componentData[componentName]
  );

  const requestProps = {
    allowAnonymousRequest: true,
    requestCondition: Boolean(props.params.username),
    url: "/user",
    params: { username: props.params.username },
  };

  return (
    <GetComponent
      componentName={componentName}
      Component={Profile}
      requestProps={requestProps}
      refreshData={props.params.username !== currentUsername}
      persistData
      {...props}
    />
  );
}

export default ProfileGet;
