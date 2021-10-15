import styled from "styled-components";

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address

export const Address = styled.address`
  font-style: ${({ $fontStyle = "normal" }) => $fontStyle};
  width: ${({ $width = "100%" }) => $width};
`;
