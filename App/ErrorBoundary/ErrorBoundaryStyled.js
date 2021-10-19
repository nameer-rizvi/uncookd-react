import styled from "styled-components";
import { style } from "../../../shared";

const ErrorBoundaryStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 30px;
  font-family: ${style.fontFamily};
  color: ${style.color};

  h1 {
    margin-bottom: 30px;
  }

  h2,
  h3,
  h4,
  p,
  small {
    margin: 15px 0;
  }

  &.production-error {
    max-width: 600px;
    h2,
    h3,
    h4 {
      font-weight: normal;
    }
  }

  small {
    display: block;
  }

  pre {
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  a {
    text-decoration: none;
    color: inherit;
    outline: solid 1px;
    width: fit-content;
    margin: 40px 0;
    padding: 8px 16px;
    font-size: 14px;
  }

  a:hover,
  a:focus {
    text-decoration: underline;
    background-color: #0000000d;
  }
`;

export default ErrorBoundaryStyled;
