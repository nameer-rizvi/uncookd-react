import React from "react";
import styled from "styled-components";
import { FlexBox, P } from "../Element";
import { label } from "../../../shared";
import ContentAccessButton from "./ContentAccessButton";

const StyledFlexBox = styled(FlexBox)`
  ${({ theme }) => theme.preset.placeholder[1]}
`;

function ContentAccess({
  content_access,
  children = null,
  username,
  display_name,
  name,
  ...rest
}) {
  if (content_access === false) {
    name =
      (name && name.title) || label.user({ username, display_name, ...name });

    if (!name.endsWith(".")) name = name + ".";

    const blurb =
      "This account is private - only subscribers can view content for " + name;

    return (
      <StyledFlexBox className="private-content">
        <P>{blurb}</P>
        <ContentAccessButton name={name} {...rest} />
      </StyledFlexBox>
    );
  } else return children;
}

export default ContentAccess;
