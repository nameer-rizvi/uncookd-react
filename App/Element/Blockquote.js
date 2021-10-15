import styled from "styled-components";

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote

export const Blockquote = styled.blockquote`
  margin: 0;
  line-height: ${({ theme, $lineHeight = 1 }) => theme.lineHeight[$lineHeight]};
`;
