import styled from "styled-components";
import { Header, H2_1, P, Small } from "../Element";

export const ArticleHeader = styled(Header)`
  width: 100%;
  p,
  a {
    font-size: ${({ theme }) => theme.fontSize.m};
    line-height: ${({ theme }) => theme.lineHeight[3]};
    word-break: break-word;
  }
`;

export const ArticleHeading = styled(H2_1)`
  display: flex;
  align-items: flex-start;
  word-break: break-word;
  text-align: initial;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  line-height: ${({ theme }) => theme.lineHeight[2]};
  svg {
    min-width: fit-content;
    margin: 0 5px 0 0;
  }
`;

export const ArticleP = styled(P)`
  font-size: ${({ theme }) => theme.fontSize.m};
  line-height: ${({ theme }) => theme.lineHeight[3]};
  margin-top: ${({ $marginTop }) => ($marginTop ? "5px" : "")};
  word-break: break-word;
  text-align: initial;
`;

export const ArticleSmall = styled(Small)`
  margin-top: ${({ $marginTop }) => ($marginTop ? "3px" : "")};
`;
