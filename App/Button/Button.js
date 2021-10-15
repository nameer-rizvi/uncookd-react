import React from "react";
import { SVG, SpanHiddenText, Address } from "../Element";
import {
  StyledA,
  StyledNavLink,
  StyledLink,
  StyledButton,
} from "./ButtonStyled";

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a

function Button({ svg: svgName, hiddenText, initialStyle, navLink, ...props }) {
  const { onClick, href, name, to, title, disabled } = props;

  // Set children appropriately.

  props.children = svgName ? (
    <SVG
      name={svgName}
      hiddenText={hiddenText}
      aria-hidden="true"
      ignoreTitle
    />
  ) : hiddenText ? (
    <SpanHiddenText>{hiddenText}</SpanHiddenText>
  ) : (
    props.children
  );

  // Rules / warnings.

  if (!href && !to && onClick && !name)
    console.warn("Missing 'name' for <Button /> with props: ", props);

  if (!title && !hiddenText)
    console.warn("Missing 'title' for <Button /> with props: ", props);

  if (title && hiddenText)
    console.warn(
      `Button with title '${title}' has a 'title' and a 'hiddenText'. Please choose only one.`
    );

  if (!props.children && !props.dangerouslySetInnerHTML)
    console.warn("Missing 'content' for <Button /> with props: ", props);

  // Disabled button state.

  if (disabled && title) props.title = "[DISABLED] " + props.title;

  if (disabled && onClick) props.onClick = (e) => e && e.preventDefault();

  // Add initial styling.

  if (initialStyle) {
    if (!props.$display) props.$display = "initial";
    if (!props.$width) props.$width = "auto";
  }

  // Render.

  if (href) {
    const isAddress = href.startsWith("mailto") || href.startsWith("tel");

    const AnchorLink = (
      <StyledA target="_blank" rel="noopener noreferrer" {...props} />
    );

    return isAddress ? <Address>{AnchorLink}</Address> : AnchorLink;
  } else if (to) {
    return navLink ? <StyledNavLink {...props} /> : <StyledLink {...props} />;
  } else return <StyledButton type="button" {...props} />;
}

export default Button;
