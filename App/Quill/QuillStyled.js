import styled from "styled-components";
import "quill/dist/quill.snow.css";

const QuillStyled = styled.div`
  height: 100%;
  width: 100%;
  overflow: auto;
  border: 0 !important;
  word-break: break-word;
  margin-top: ${({ $withToolbar, theme }) =>
    $withToolbar ? theme.height.pageNavMobile + " !important" : ""};

  .ql-editor {
    user-select: text;
    white-space: break-spaces;
    font-size: ${({ theme }) => theme.fontSize.l} !important;
    ${({ $withToolbar, theme }) =>
      $withToolbar ? theme.page.padding.template : "padding: 0 !important"}
  }

  // Empty elements (no content), need a height + width to render caret...
  .ql-editor > * {
    height: auto;
    width: auto;
  }

  .ql-blank::before {
    right: 0 !important;
    left: ${({ theme }) => theme.page.padding.desktop[3]} !important;
    color: ${({ theme }) => theme.color.dark[1]} !important;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint[6]}) {
    .ql-blank::before {
      left: ${({ theme }) => theme.page.padding.mobile[3]} !important;
    }
  }
`;

export default QuillStyled;
