import React from "react";
import { useSelector } from "react-redux";
import { FlexBox, H1_1 } from "../Element";
import Feed from "../Feed";
import NotFound from "../NotFound";

function Admin() {
  const { is_admin } = useSelector((state) => state.user);

  return is_admin ? (
    <FlexBox $grow>
      <H1_1>Admin Dashboard: Errors</H1_1>
      <Feed requestURL="/error" params={{ list: "errors" }} />
    </FlexBox>
  ) : (
    <NotFound />
  );
}

export default Admin;
