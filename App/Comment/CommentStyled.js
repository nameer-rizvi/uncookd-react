import styled from "styled-components";
import { FlexBox } from "../Element";

const CommentStyled = styled(FlexBox)`
  ${({ theme }) => theme.page.padding.template}

  height: 100%;
  overflow: auto;

  #comment-main {
    border-left: ${({ theme }) => theme.border[5]};

    .comment-context {
      flex-direction: row;
      flex-wrap: wrap;
      font-size: ${({ theme }) => theme.fontSize.s};
    }

    .comment-context span#side-padding {
      margin: 0 4px;
    }

    .comment-tags {
      font-size: ${({ theme }) => theme.fontSize.s};
    }

    .comment-context a:hover,
    .comment-context button:hover,
    .comment-tags a:hover,
    .comment-delete button:hover {
      text-decoration: underline;
    }

    .comment-context button:first-child span:first-letter,
    .comment-tags span {
      text-transform: capitalize;
    }

    .comment-author {
      margin-top: 15px;
      font-size: ${({ theme }) => theme.fontSize.ml};
      text-decoration: underline;
    }

    .comment-text {
      margin: 15px 0 20px 0;
      font-size: ${({ theme }) => theme.fontSize.l};
      line-height: ${({ theme }) => theme.lineHeight[8]};
    }

    .comment-row {
      flex-direction: row;
      align-items: flex-end;
      justify-content: space-between;
    }

    .comment-delete {
      display: flex;
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }
`;

export default CommentStyled;
