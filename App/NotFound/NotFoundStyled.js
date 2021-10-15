import styled from "styled-components";
import { FlexBox } from "../Element";

const NotFoundStyled = styled(FlexBox)`
  align-items: center;
  max-width: 350px;
  margin: ${({ theme }) => theme.margin[1]};

  h1,
  a {
    margin-bottom: 30px;
  }

  blockquote {
    padding-left: 30px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint[6]}) {
    h1 {
      font-size: ${({ theme }) => theme.fontSize.half_s};
    }
  }
`;

export default NotFoundStyled;
