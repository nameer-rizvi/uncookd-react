import React from "react";
import styled from "styled-components";
import { FlexBox } from "../../Element";

const StyledContainer = styled.div`
  margin: 15px;
`;

const StyledDiv = styled.div`
  height: 100px;
  width: 100px;
  border: solid 1px black;
  background: ${({ theme, color, index }) => theme.color[color][index]};
  margin-top: 10px;
`;

function SiteSandboxPlaygroundShades() {
  const shadeCount = 6;

  const shades = {
    lights: [],
    darks: [],
  };

  for (let i = shadeCount - 1; i > 0; i--) {
    shades.lights.push(
      <StyledContainer key={i}>
        light #{i}: <StyledDiv index={i} color="light" />
      </StyledContainer>
    );
  }

  for (let j = shadeCount - 1; j > 0; j--) {
    shades.darks.push(
      <StyledContainer key={j}>
        dark #{j}: <StyledDiv index={j} color="dark" />
      </StyledContainer>
    );
  }

  return Object.keys(shades).map((shade, index) => (
    <FlexBox key={index} $row>
      {shades[shade].map((_shade) => _shade)}
    </FlexBox>
  ));
}

export default SiteSandboxPlaygroundShades;
