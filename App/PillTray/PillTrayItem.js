import React from "react";
import { isString } from "simpul";
import { snakeCase } from "change-case";
import PillTrayItemContent from "./PillTrayItemContent";
import { PillTrayItemSpan, PillTrayItemButton } from "./PillTrayStyled";
import { TooltipButton } from "../Tooltip";

// PillItemTooltip needs <PillSpan /> wrapper because
// <TooltipButton /> is contained within a <Fragment />,
// and <Fragment /> can't have styles applied to it.

function PillTrayItem({
  item,
  index,
  label,
  selected,
  title,
  name,
  onClick,
  to,
  svg,
  tooltip,
  ...rest
}) {
  const meta = { item, index };

  if (rest.id) rest.id = rest.id(meta); // rest.id === make.id(meta)

  label = label
    ? label(meta)
    : item && item.label
    ? item.label(meta)
    : isString(item) && item;

  selected = selected ? selected(meta) : false;

  title = title ? title(meta) : label + ".";

  name = name
    ? name(meta)
    : rest.id
    ? rest.id
    : snakeCase(`${index} pill ${label}`);

  rest.children = !tooltip && <PillTrayItemContent svg={svg} label={label} />;

  return tooltip ? (
    <PillTrayItemSpan $selected={selected}>
      <TooltipButton {...tooltip(meta)} {...rest} />
    </PillTrayItemSpan>
  ) : onClick ? (
    <PillTrayItemButton
      $selected={selected}
      title={title}
      name={name}
      onClick={(e) => onClick({ e, ...meta })}
      {...rest}
    />
  ) : to ? (
    <PillTrayItemButton
      $selected={selected}
      title={title}
      to={to(meta)}
      {...rest}
    />
  ) : (
    <PillTrayItemSpan $selected={selected} {...rest} />
  );
}

export default PillTrayItem;
