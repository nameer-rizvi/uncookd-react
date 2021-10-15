import styled from "styled-components";
import { Footer, Nav } from "../Element";
import { font } from "../../../shared";

export const FooterContainer = styled(Footer)`
  font-family: ${font.family("Sans-Serif")};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 15px;
`;

export const FooterNavContainer = styled(Nav)`
  flex-wrap: inherit;
  margin-right: 10px;
  li {
    margin-right: 7px;
  }
`;

export const FooterNavSpanContainer = styled.span`
  padding: 1px 1px 0 1px;
  color: ${({ theme }) => theme.color.dark[3]};
`;
