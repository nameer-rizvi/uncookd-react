import React from "react";
import styled from "styled-components";
import { FlexBox } from "../Element";
import SiteSandboxPlayground from "./Playground/SiteSandboxPlayground";

const SiteSandboxPlaygroundStyled = styled(FlexBox)`
  border: ${({ theme }) => theme.border[1]};
  flex-grow: 1;
  margin-top: 20px;
  padding: 20px 30px;
  scroll: auto;
  word-break: break-word;
`;

const SiteSandbox = (props) => (
  <FlexBox $grow>
    Test code at src/react/App/SiteSandbox/SiteSandboxPlayground.js:
    <SiteSandboxPlaygroundStyled>
      <SiteSandboxPlayground {...props} />
    </SiteSandboxPlaygroundStyled>
  </FlexBox>
);

export default SiteSandbox;
