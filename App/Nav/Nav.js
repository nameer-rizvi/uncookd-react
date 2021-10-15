import React from "react";
import * as ListElement from "../List";
import NavStyled from "./NavStyled";

export function Nav({
  ul = "UL_3",
  li = "LI_2",
  style = {},
  items = [],
  ...rest
}) {
  const List = {
    UL: ListElement[ul],
    LI: ListElement[li],
  };

  items = items && items.filter(Boolean);

  if (!items.length) {
    console.warn("Missing 'items'.");
    return null;
  }

  if (!List.UL) {
    console.warn("Invalid 'ul'.");
    return null;
  }

  if (!List.LI) {
    console.warn("Invalid 'li'.");
    return null;
  }

  if (!rest.id && !rest.className)
    console.warn("Missing 'id' / 'className' for nav.");

  return (
    <NavStyled {...rest}>
      <List.UL style={style.ul}>
        {items.map((children, index) => (
          <List.LI key={index} style={style.li}>
            {children}
          </List.LI>
        ))}
      </List.UL>
    </NavStyled>
  );
}
