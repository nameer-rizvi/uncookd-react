import styled from "styled-components";
import { FlexBox } from "../Element";

const StoryCopyrightStyled = styled(FlexBox)`
  p,
  button {
    width: 100%;
    line-height: ${({ theme }) => theme.lineHeight[5]};
    font-size: ${({ theme }) => theme.fontSize.ml};
  }

  // COPYRIGHT MAIN

  .copyright-main p {
    text-align: center;
  }

  .copyright-main p:first-child,
  .copyright-main p:nth-child(3) {
    font-style: italic;
  }

  .copyright-main p:nth-child(2) {
    margin-top: 20px;
  }

  .copyright-main p:nth-child(3),
  .copyright-main p:nth-child(4) {
    margin-top: 30px;
  }

  // CITATIONS || MISCELLANEOUS || NOTICE

  button {
    flex-direction: column;
    word-break: break-word;
  }

  h4,
  small {
    margin-top: 60px;
  }

  h4,
  button p {
    text-align: left;
    font-weight: normal;
  }

  button span {
    margin-left: 5px;
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  button:hover p {
    text-decoration: underline;
  }

  small a {
    display: inline;
  }
`;

export default StoryCopyrightStyled;
