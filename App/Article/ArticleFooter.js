import React from "react";
import styled from "styled-components";
import { Footer, UL_3, LI_2 } from "../Element";

export const ArticleFooter = styled(Footer)`
  margin-top: 2px;
  line-height: ${({ theme }) => theme.lineHeight[3]};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-style: italic;

  button {
    font-style: inherit;
  }
`;

const ArticleFooterUL = styled(UL_3)`
  flex-wrap: wrap;

  li.article-footer-list-item {
    margin: 1px 0;
    word-break: break-word;
  }

  li.article-footer-list-item:not(:last-child)::after {
    content: "•";
    margin: 0 5px;
  }
`;

// li.article-footer-list-item,
// li.article-footer-list-item:not(:last-child)::after {
//   height: 14px;
// }

export function ArticleFooterList({ list = [] }) {
  list = list.filter(Boolean);

  return list.length ? (
    <ArticleFooterUL className="article-footer-list">
      {list.map((listItem, listItemIndex) => (
        <LI_2 key={listItemIndex} className="article-footer-list-item">
          {listItem}
        </LI_2>
      ))}
    </ArticleFooterUL>
  ) : null;
}
