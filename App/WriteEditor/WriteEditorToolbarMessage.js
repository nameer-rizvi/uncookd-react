import React, { useEffect } from "react";
import styled from "styled-components";
import { Small } from "../Element";
import { useToggle } from "../../hooks";

const StyledSmall = styled(Small)`
  font-style: italic;
  margin: 0;
  margin-left: auto;
  align-self: center;
`;

function WriteEditorToolbarMessage({ message }) {
  const toggle = useToggle(true);

  message = message && message.toString().replace("Error: ", "");

  useEffect(() => {
    let timeout;

    if (message && message.toLowerCase().includes("saved")) {
      timeout = setTimeout(() => toggle.change(false), 2000);
    } else toggle.change(true);

    function clearActiveTimeout() {
      if (timeout) clearTimeout(timeout);
    }

    return clearActiveTimeout;
  }, [message]); // eslint-disable-line react-hooks/exhaustive-deps

  return message && toggle.state ? <StyledSmall>{message}</StyledSmall> : null;
}

export default WriteEditorToolbarMessage;
