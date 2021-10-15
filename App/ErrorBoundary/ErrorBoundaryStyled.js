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

  small {
    display: block;
  }

  pre {
    white-space: pre-wrap;
    word-wrap: break-word;
  }
`;

export default ErrorBoundaryStyled;
