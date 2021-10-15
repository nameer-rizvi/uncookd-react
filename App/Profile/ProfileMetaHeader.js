import React from "react";
import { P, H1 } from "../Element";
import { label } from "../../../shared";

export const ProfileMetaBy = () => (
  <P id="by" $fontStyle="italic">
    by
  </P>
);

export const ProfileMetaHeaderDisplayName = ({ display_name, username }) =>
  display_name || username ? (
    <H1 id="display-name" $fontSize="quarter" $lineHeight={4}>
      {display_name || username}
    </H1>
  ) : null;

export const ProfileMetaHeaderUsername = ({ display_name, username }) =>
  display_name && username ? (
    <P id="username" $fontSize="m">
      {label.user({ username })}
    </P>
  ) : null;
