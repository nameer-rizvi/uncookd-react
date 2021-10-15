import React from "react";
import TooltipStyledContainer from "./TooltipStyledContainer";
import ReactTooltip from "react-tooltip";

function Tooltip({ persist, ...rest }) {
  if (persist) Object.assign(rest, { delayHide: 100, className: "persist" });

  return window.innerWidth > 550 ? ( // theme.breakpoint[6]
    <TooltipStyledContainer>
      <ReactTooltip place="bottom" effect="solid" delayShow={250} {...rest} />
    </TooltipStyledContainer>
  ) : null;
}

export default Tooltip;
