import styled from "styled-components";

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p

export const P = styled.p`
  font-size: ${({ theme, $fontSize }) => theme.fontSize[$fontSize] || ""};
  font-style: ${({ $fontStyle = "" }) => $fontStyle};
  font-weight: ${({ $fontWeight = "" }) => $fontWeight};
  line-height: ${({ theme, $lineHeight = 2 }) => theme.lineHeight[$lineHeight]};
  text-decoration: ${({ $underline }) => ($underline ? "underline" : "")};
`;
