import styled from "styled-components";

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div

export const FlexBox = styled.div`
  display: flex;
  flex: ${({ $flex1, $flex2 }) => ($flex1 ? "1" : $flex2 ? "1 1" : "")};
  flex-direction: ${({ $row }) => ($row ? "row" : "column")};
  flex-grow: ${({ $grow }) => ($grow ? "1" : "")};
  flex-wrap: ${({ $wrap }) => ($wrap ? "wrap" : "")};
  justify-content: ${({ $justify = "" }) => $justify};
  align-items: ${({ $align = "" }) => $align};
`;

// ******
// ******
// ******

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #000;
  z-index: ${({ theme, $zIndex }) => ($zIndex ? theme.zIndex[$zIndex] : "")};
  opacity: ${({ $opacity = "" }) => $opacity};
`;

// ******
// ******
// ******

export const BoxAfter = styled.div`
  content: "";
  display: block;
  padding-bottom: ${({ paddingBottom = "40px" }) => paddingBottom};
`;

// ******
// ******
// ******

export const GrayBox = styled(FlexBox)`
  padding: 15px;
  background-color: ${({ theme }) => theme.color.light[4]};
  line-height: ${({ theme }) => theme.lineHeight[2]};
`;
