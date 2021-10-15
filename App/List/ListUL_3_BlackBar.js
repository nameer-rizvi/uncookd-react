import styled from "styled-components";
import { UL_3 } from "./ListUL";

export const UL_3_BlackBar = styled(UL_3)`
  width: 100%;
  background-color: ${({ theme }) => theme.color.dark[2]};
  border-radius: 2px;

  li {
    flex: 1 1;
    align-items: center;
  }

  li.active button,
  li.active a {
    font-weight: bold;
    text-decoration: underline;
  }

  li button,
  li a {
    padding: 5px;
    width: 100%;
    text-align: center;
    font-size: ${({ theme, $fontSize = "m" }) => theme.fontSize[$fontSize]};
    color: ${({ theme }) => theme.color.light[2]} !important;
  }
`;
