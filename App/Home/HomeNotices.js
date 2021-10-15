import React from "react";
import { useToggleLocalStorage } from "../../hooks";
import { isArrayValid } from "simpul";
import { GrayBox, Button } from "../Element";

function HomeMetaNotices({ notices }) {
  const toggle = useToggleLocalStorage("homeNotices");

  if (isArrayValid(notices)) {
    return notices.map((notice, index) => {
      const id = notice.text.replace(/\W/g, "");

      if (!toggle.state(id)) {
        const ButtonProps = {};

        if (notice.closable) {
          ButtonProps.name = "close_notice_" + index;

          ButtonProps.title = "Close notice.";

          ButtonProps.onClick = () => toggle.change(id);

          ButtonProps.$underline = true;

          return (
            <GrayBox key={index} $align="flex-start" $row>
              <Button {...ButtonProps}>
                {notice.text} Click here to close this notice.
              </Button>
            </GrayBox>
          );
        } else
          return (
            <GrayBox key={index} $align="flex-start" $row>
              {notice.text} Click here to close this notice.
            </GrayBox>
          );
      } else return null;
    });
  } else return null;
}

export default HomeMetaNotices;
