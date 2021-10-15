import styled from "styled-components";
import { px } from "../../utils";
import { UL_2 } from "../Element";

const scale = 3;

const ArticleListStyled = styled(UL_2)`
  margin: ${px.scale(scale)} 0;

  li.article-list-item:not(:first-child) {
    margin-top: ${px.scale(scale)};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint[6]}) {
    li.article-list-item:not(:first-child) {
      border-top: solid 1px ${({ theme }) => theme.color.light[5]};
      padding-top: ${px.scale(scale)};
    }
  }
`;

export default ArticleListStyled;
