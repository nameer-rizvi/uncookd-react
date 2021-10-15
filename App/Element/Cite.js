import styled from "styled-components";

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite

export const Cite = styled.cite`
  font-style: ${({ $fontStyle = "normal" }) => $fontStyle};
  font-size: ${({ theme, $fontSize = "" }) => theme.fontSize[$fontSize]};
`;
