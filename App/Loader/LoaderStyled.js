import styled from "styled-components";
import { FlexBox } from "../Element";

// Main styling is hosted in /src/shared/style.loader for use in splash.html.

const LoaderStyled = styled(FlexBox)`
  div.lds-ellipsis div {
    background-color: ${({ theme }) => theme.color.dark[3]};
  }
  div.lds-ellipsis.alt div {
    background-color: ${({ theme }) => theme.color.light[3]};
  }
`;

export default LoaderStyled;
