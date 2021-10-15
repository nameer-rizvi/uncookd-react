import React from "react";
import styled from "styled-components";
import { P, SVG, Time } from "../Element";

const StyledP = styled(P)`
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.m};
`;

const StyledSVG = styled(SVG)`
  fill: ${({ $fill, theme }) => $fill || theme.color.dark[2]};
`;

const ProfileMetaBirthday = ({ joined_at, birthday }) =>
  joined_at ? (
    <StyledP id="birthday">
      <Time datetime={joined_at} format="M/D/Y" event="Joined" />{" "}
      {birthday ? <StyledSVG name="balloons" $fill={birthday} /> : null}
    </StyledP>
  ) : null;

export default ProfileMetaBirthday;
