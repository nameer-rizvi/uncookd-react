import styled from "styled-components";
import { Article } from "../Element";

const ArticleContainer = styled(Article)`
  justify-content: flex-start;
  flex-grow: 1;
  position: relative;

  a:hover,
  button:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint[6]}) {
    section.article-left {
      display: none !important;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint[4]}) {
    flex-direction: column !important;
    section.article-main {
      border-left: unset;
      padding-left: unset;
    }
  }
`;

export default ArticleContainer;
