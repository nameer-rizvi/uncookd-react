import styled from "styled-components";

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small

export const Small = styled.small`
  width: unset;
  font-size: ${({ theme, $fontSize = "s" }) => theme.fontSize[$fontSize]};
  color: ${({ theme, $light }) => ($light ? theme.color.dark[1] : "")};
  font-style: ${({ $fontStyle = "" }) => $fontStyle};
  line-height: ${({ theme }) => theme.lineHeight[3]};
`;
