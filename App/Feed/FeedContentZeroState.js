import React from "react";
import styled from "styled-components";
import { FlexBox, P } from "../Element";
import { SVG } from "../SVG";

const StyledFlexBox = styled(FlexBox)(
  ({ theme }) => theme.preset.placeholder[1]
);

const StyledP = styled(P)`
  font-style: italic;
  margin-left: 30px;
`;

const FeedContentZeroState = ({ Component, ...rest }) =>
  Component ? (
    <StyledFlexBox className="zero-state">
      <Component {...rest} />
    </StyledFlexBox>
  ) : (
    <StyledFlexBox className="zero-state">
      <SVG name="sad" height={60} width={60} />
      <StyledP>Nothing to see here...</StyledP>
    </StyledFlexBox>
  );

export default FeedContentZeroState;
