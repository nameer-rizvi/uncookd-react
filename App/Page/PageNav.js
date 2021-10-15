import React from "react";
import styled from "styled-components";
import { Nav, Button } from "../Element";

const StyledNav = styled(Nav)`
  position: absolute;
  height: 100%;
  padding: 12px 0;
  right: 10px;
  mix-blend-mode: difference;
  z-index: ${({ theme }) => theme.zIndex.pageNav};

  ul {
    height: 100%;
  }

  li {
    padding: 3px;
  }

  li:first-child {
    margin: 0 0 auto 0;
  }

  li:not(:first-child) {
    margin: 5px 0;
  }
`;

const StyledButton = styled(Button)`
  color: ${({ $selected }) => ($selected ? "#000" : "#fff")};
  svg {
    border-radius: 50%;
    padding: 3px;
    border: solid 1px #fff;
    background-color: ${({ $selected }) => ($selected ? "#fff" : "#000")};
  }
`;

const PageNav = ({ buttons }) =>
  buttons ? (
    <StyledNav
      id="page-nav"
      ul="UL_2"
      items={buttons.map(
        (button, index) => button && <StyledButton key={index} {...button} />
      )}
    />
  ) : null;

export default PageNav;
