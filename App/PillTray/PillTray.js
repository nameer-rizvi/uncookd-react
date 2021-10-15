import React from "react";
import { isArrayValid } from "simpul";
import { PillTrayList } from "./PillTrayStyled";
import { joinAttr } from "../../utils";
import { LI_2 as PillTrayListItem } from "../Element";
import PillTrayItem from "./PillTrayItem";

const PillTray = ({ items, className, ...rest }) =>
  isArrayValid(items) ? (
    <PillTrayList className={joinAttr.className(["pill-tray-list", className])}>
      {items.map((item, index) => (
        <PillTrayListItem key={index} className="pill-tray-list-item">
          <PillTrayItem index={index} item={item} {...rest} />
        </PillTrayListItem>
      ))}
    </PillTrayList>
  ) : null;

export default PillTray;
