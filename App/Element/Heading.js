import React from "react";
import styled from "styled-components";

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements

// ******
// **H1**
// ******

export const H1 = styled.h1`
  font-size: ${({ theme, $fontSize = "half" }) => theme.fontSize[$fontSize]};
  font-style: ${({ $fontStyle = "" }) => $fontStyle};
  font-weight: ${({ $fontWeight = "" }) => $fontWeight};
  line-height: ${({ theme, $lineHeight = 6 }) => theme.lineHeight[$lineHeight]};
`;

export const H1_1 = (props) => (
  <H1 $fontWeight="normal" $fontSize="third" {...props} />
);

export const H1_2 = (props) => (
  <H1 $fontWeight="normal" $fontSize="quarter" {...props} />
);

// ******
// **H2**
// ******

export const H2 = styled.h2`
  font-size: ${({ theme, $fontSize = "quarter" }) => theme.fontSize[$fontSize]};
  font-weight: ${({ $fontWeight = "" }) => $fontWeight};
`;

export const H2_1 = (props) => <H2 $fontWeight="normal" {...props} />;

// ******
// **H3**
// ******

export const H3 = styled.h3`
  font-size: ${({ theme, $fontSize = "l" }) => theme.fontSize[$fontSize]};
  font-weight: ${({ $fontWeight = "" }) => $fontWeight};
`;

export const H3_1 = (props) => <H3 $fontWeight="normal" {...props} />;

// ******
// **H4**
// ******

export const H4 = styled.h4`
  font-size: ${({ theme, $fontSize }) => theme.fontSize[$fontSize] || ""};
  font-weight: ${({ $fontWeight = "" }) => $fontWeight};
`;

export const H4_1 = (props) => <H4 $fontWeight="normal" {...props} />;

export const H4_2 = (props) => (
  <H4 style={{ marginBottom: "1em" }} {...props} />
);

export const H4Title = styled(H4)`
  width: 100%;
  word-break: break-word;
  padding-bottom: 10px;
  margin: 0 0 20px 0;
  border-bottom: ${({ theme }) => theme.border[1]};
  font-size: ${({ theme }) => theme.fontSize.l};
  line-height: ${({ theme }) => theme.lineHeight[2]};
`;
