import React from "react";
import { FlexBox, ButtonResolver } from "../Element";

const HomeMetaDetailCTA = () => (
  <FlexBox id="home-meta-detail-cta">
    <ButtonResolver resolve="signup" $square>
      click here to sign up
    </ButtonResolver>
    <ButtonResolver resolve="login" $square>
      click here to login
    </ButtonResolver>
  </FlexBox>
);

export default HomeMetaDetailCTA;
