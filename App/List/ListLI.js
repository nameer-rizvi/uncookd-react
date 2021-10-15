import styled from "styled-components";

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li

export const LI = styled.li``;

export const LI_1 = styled(LI)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const LI_2 = styled(LI)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LI_3 = styled(LI)`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;
