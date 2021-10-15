import styled from "styled-components";
import { FlexBox } from "../Element";

const StorySidebarStyled = styled(FlexBox)`
  #sidebar-title {
    width: 100%;
    justify-content: flex-start;
    text-align: left;
    font-weight: bold;
    text-decoration: underline;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  #sidebar-author a {
    text-decoration: underline;
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  #sidebar-description {
    font-size: ${({ theme }) => theme.fontSize.ml};
  }

  .pill-tray-list-item a {
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  #sidebar-delete button:hover {
    text-decoration: underline;
  }

  #sidebar-title,
  #sidebar-author,
  #sidebar-description,
  ul.pill-tray-list {
    margin-bottom: 10px;
  }

  #story-copyright {
    margin-top: 30px;
  }

  #sidebar-delete {
    display: flex;
    flex-direction: row;
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint[3]}) {
    nav#feed-nav a {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }
`;

export default StorySidebarStyled;
