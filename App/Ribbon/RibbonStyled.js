import styled from "styled-components";
import { Span, SVG, SVGSize } from "../Element";

export const RibbonContainer = styled(Span)`
  position: relative;
`;

export const RibbonStatus = styled(SVG)`
  position: absolute;
  bottom: ${({ $isBookmark }) => ($isBookmark ? "-8px" : "-6px")};
  right: ${({ $isBookmark }) => ($isBookmark ? "-7px" : "-4px")};
  height: ${SVGSize.xs};
  width: ${SVGSize.xs};
`;
