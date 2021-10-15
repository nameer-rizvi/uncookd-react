import styled from "styled-components";
import { Nav } from "../Element";

const HeaderNavMainStyled = styled(Nav)`
  flex: 1 1;
  ul {
    flex-grow: 1;
    justify-content: ${({ $isMobile }) =>
      $isMobile ? "space-around" : "flex-end"};
  }
`;

export default HeaderNavMainStyled;
