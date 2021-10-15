import styled from "styled-components";
import { FlexBox } from "../Element";

const SiteStyled = styled(FlexBox)`
  ${({ theme }) => theme.preset.limitWidth(500)}

  h2 {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }

  h4 {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  h2,
  h3,
  h4,
  p,
  strong,
  address {
    margin-top: 30px;
    line-height: ${({ theme }) => theme.lineHeight[1]};
  }

  li {
    margin-top: 15px;
  }

  a {
    width: unset;
  }
`;

export default SiteStyled;
