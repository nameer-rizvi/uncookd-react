import styled from "styled-components";

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul

export const UL = styled.ul``;

export const UL_1 = styled(UL)`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const UL_2 = styled(UL_1)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const UL_3 = styled(UL_1)`
  display: flex;
  flex-direction: row;
  flex-wrap: ${({ $wrap }) => ($wrap ? "wrap" : "")};
`;
