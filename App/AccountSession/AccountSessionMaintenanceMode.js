import React from "react";
import styled from "styled-components";
import { FlexBox, H1_1, H2_1, H3_1 } from "../Element";
import { name } from "../../../shared";
import NavSocialMedia from "../NavSocialMedia";

const StyledFlexBox = styled(FlexBox)`
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  padding: 15px;
  text-align: center;
  line-height: ${({ theme }) => theme.lineHeight[7]};

  h1 {
    margin-bottom: 60px;
  }

  h3 {
    margin-top: 20px;
  }

  nav {
    margin-top: 10px;
  }
`;

const AccountSessionMaintenanceMode = () => (
  <StyledFlexBox>
    <H1_1>{name.short}</H1_1>
    <H2_1>Sorry, we're currently under maintenance...</H2_1>
    <H3_1>But we promise we'll be done soon!</H3_1>
    <H3_1>In the mean time, why not check out our social media:</H3_1>
    <NavSocialMedia />
  </StyledFlexBox>
);

export default AccountSessionMaintenanceMode;
