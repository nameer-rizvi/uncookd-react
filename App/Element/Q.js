import styled from "styled-components";

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q

export const Q = styled.q`
  font-size: ${({ theme, $fontSize }) => theme.fontSize[$fontSize] || ""};
  font-style: ${({ $fontStyle = "" }) => $fontStyle};
`;
