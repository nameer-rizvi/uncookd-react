import styled from "styled-components";
import { FlexBox, SVGSize } from "../Element";

const SettingsAccountVerifyStyled = styled(FlexBox)`
  flex-direction: row;
  margin-bottom: 25px;

  svg {
    min-height: ${SVGSize.l.height}px !important;
    min-width: ${SVGSize.l.width}px !important;
  }

  div {
    padding-left: 18px;
  }

  p:not(:first-child) {
    margin-top: 8px;
  }

  button {
    margin-top: 15px;
    width: 100%;
  }
`;

export default SettingsAccountVerifyStyled;
