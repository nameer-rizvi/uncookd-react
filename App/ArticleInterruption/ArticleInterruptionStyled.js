import styled from "styled-components";
import { ArticleContainer } from "../Article";

const ArticleInterruptionStyled = styled(ArticleContainer)`
  background-color: ${({ theme }) => theme.color.light[4]};
  border: ${({ theme }) => theme.border[1]};
  padding: 15px 0;

  a {
    width: 100%;
  }

  small {
    font-style: italic;
  }

  header {
    margin: 5px 0 8px;
    font-weight: bold;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint[6]}) {
    section.article-main {
      border-left: unset;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint[4]}) {
    padding-left: 15px;
  }
`;

export default ArticleInterruptionStyled;
