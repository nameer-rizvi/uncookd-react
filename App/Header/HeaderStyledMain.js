import styled from "styled-components";
import { Header } from "../Element";

const HeaderStyledMain = styled(Header)`
  ${({ theme }) => theme.preset.sticky}

  top: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ id }) => (id === "desktop" ? "50px" : "40px")};
  height: ${({ theme }) => theme.height.pageNav};
  z-index: ${({ theme }) => theme.zIndex.header};

  a.home-button {
    flex: 1;
    justify-content: flex-start;
  }

  nav,
  nav li a,
  nav li button {
    margin-left: 20px;
  }
`;

export default HeaderStyledMain;
