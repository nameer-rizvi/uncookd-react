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

  h2 {
    margin: 60px 0 20px 0;
    line-height: 35px;
  }

  h3 {
    margin: 20px 0 10px 0;
    line-height: 25px;
  }
`;

const AccountSessionMaintenanceMode = () => (
  <StyledFlexBox>
    <H1_1>{name.short}</H1_1>
    <H2_1>We are currently undergoing maintenance.</H2_1>
    <H3_1>
      (And we should be done <i>very</i> soon!)
    </H3_1>
    <H3_1>In the mean time, why not check out our social media:</H3_1>
    <NavSocialMedia />
  </StyledFlexBox>
);

export default AccountSessionMaintenanceMode;
