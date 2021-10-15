import styled from "styled-components";

const PageStyled = styled.div`
  margin: 0 auto;
  height: 100%;
  ${({ theme }) => theme.page.width.template}
  z-index: ${({ theme }) => theme.zIndex.page};
  background-color: ${({ theme }) => theme.color.light[3]};
`;

export default PageStyled;
