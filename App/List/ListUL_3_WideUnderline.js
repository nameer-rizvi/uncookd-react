import styled from "styled-components";
import { UL_3 } from "./ListUL";

export const UL_3_WideUnderline = styled(UL_3)`
  width: 100%;
  border-bottom: ${({ theme }) => theme.border[5]};

  li {
    flex: 1 1;
    border-bottom: ${({ theme }) => theme.border[4]};
  }

  li.active {
    border-bottom: ${({ theme }) => theme.border[1]};
  }

  li button,
  li a {
    flex-grow: 1;
    padding: 10px 0;
  }
`;
