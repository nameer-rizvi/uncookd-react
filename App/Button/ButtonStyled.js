import * as StyledFlavors from "./ButtonStyledFlavors";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const style = ({
  $width = "max-content",
  $display = "flex",
  $align = "center",
  $justify = "center",
  $fontSize,
  $fontStyle = "",
  theme,
  ...rest
}) => `
  width: ${$width};
  display: ${$display};
  align-items: ${$align};
  justify-content: ${$justify};
  font-size: ${$fontSize ? theme.fontSize[$fontSize] + " !important" : ""};
  font-style: ${$fontStyle};
  text-decoration: none;
  cursor: pointer;
  
  &:focus span.offscreen-text {
    font-size: ${theme.fontSize.m};
  }
  
  &:hover span.circle,
  &:focus span.circle,
  &:hover svg,
  &:focus svg {
    opacity: 0.85;
  }
  
  ${Object.keys(rest)
    .map((key) => rest[key] && StyledFlavors[key] && StyledFlavors[key](theme))
    .filter(Boolean)
    .join(" ")}
`;

export const StyledA = styled.a(style);

export const StyledLink = styled(Link)(style);

export const StyledNavLink = styled(NavLink)(style);

export const StyledButton = styled.button(style);
