import styled from "styled-components";
import { FlexBox, Header, H1_1, SVGSize, Cite } from "../Element";

export const StoryPageContainer = styled(FlexBox)`
  ${({ $pagePadding, theme }) =>
    $pagePadding ? theme.page.padding.template : ""}

  ${({ $pagePadding }) =>
    $pagePadding ? "overflow: auto;" : ""}

  height: 100%;

  #quill-container,
  .ql-editor {
    overflow: unset;
  }

  #quill-container {
    height: auto;
  }

  .ql-editor {
    padding: 1px 0 !important;
  }
`;

export const StoryPageHeader = styled(Header)`
  margin: 25% 0 20% 0;
`;

export const StoryPageHeading = styled(H1_1)`
  line-height: ${({ theme }) => theme.lineHeight[9]};
  svg {
    margin: 2px 10px 0 0;
    height: ${SVGSize.xl.height}px;
    width: ${SVGSize.xl.width}px;
    min-height: ${SVGSize.xl.height}px;
    min-width: ${SVGSize.xl.width}px;
  }
`;

export const StoryPageCite = styled(Cite)`
  word-break: break-word;
  display: block;
  margin-top: 20px;
  font-size: ${({ theme }) => theme.fontSize.xl};
  line-height: ${({ theme }) => theme.lineHeight[5]};
`;
