import React from "react";
import styled from "styled-components";
import { joinAttr } from "../../utils";

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span

export const Span = styled.span``;

// ******
// ******
// ******

// Declaring fontSize prop in Component.style doesn't work...

const SpanHiddenTextStyled = styled(Span)`
  font-size: 0;
`;

export const SpanHiddenText = ({ className, ...rest }) => (
  <SpanHiddenTextStyled
    className={joinAttr.className([
      "screen-reader-text",
      "offscreen-text",
      className,
    ])}
    {...rest}
  />
);

// ******
// ******
// ******

export const SpanCircleStyled = styled(Span)`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 50%;
  border: ${({ $fill, theme }) => ($fill ? theme.border[1] : "solid 1px")};
  background-color: ${({ $fill, theme }) => ($fill ? theme.color.dark[3] : "")};
  color: ${({ $fill, theme }) => ($fill ? theme.color.light[3] : "")};
  height: ${({ $heightWidth = "26px" }) => $heightWidth};
  width: ${({ $heightWidth = "26px" }) => $heightWidth};
  font-size: ${({ theme, $fontSize = "xxl" }) => theme.fontSize[$fontSize]};
`;

export const SpanCircle = ({ className, ...rest }) => (
  <SpanCircleStyled
    className={joinAttr.className(["circle", className])}
    {...rest}
  />
);

// ******
// ******
// ******

export const SpanPipe = ({ className, ...rest }) => (
  <Span className={joinAttr.className(["pipe", className])} {...rest}>
    |
  </Span>
);

// ******
// ******
// ******

export const SpanBracket = styled(Span)`
  display: flex;
  &::before {
    content: "[";
    margin-right: ${({ $margin = "5px" }) => $margin};
  }
  &::after {
    content: "]";
    margin-left: ${({ $margin = "5px" }) => $margin};
  }
`;
