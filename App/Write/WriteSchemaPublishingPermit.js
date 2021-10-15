import React from "react";
import { numberLabel } from "simpul";
import { GrayBox, P, Dfn, B } from "../Element";

function WriteSchemaPublishingPermit({ publishingPermit = {} }) {
  const { is_valid, setting, requirement } = publishingPermit;

  if (!is_valid) {
    const definition = (
      <Dfn def="minimum-contribution-ratio">minimum contribution ratio</Dfn>
    );

    const validLabel = Object.keys(setting)
      .map((key) => numberLabel(setting[key], key).full)
      .join(" and ");

    const requirementLabel = Object.keys(requirement)
      .map(
        (key) =>
          requirement[key] > 0 &&
          numberLabel(requirement[key], "more " + key).full
      )
      .filter(Boolean)
      .join(" and ");

    return (
      <GrayBox className="gray-box">
        <P>
          You must maintain a {definition} of {validLabel} for every story you
          would like to publish. You don&apos;t currently meet this requirement,
          but that&apos;s ok: you only need to contribute{" "}
          <B>{requirementLabel}</B> to publish this story!
        </P>
        <P>
          We&apos;re doing this to help foster community involvement and hope
          that it leads to more feedback and support for fellow writers. Feel
          free to save your draft and come back to publish it once you&apos;ve
          met your contribution requirement(s).
        </P>
      </GrayBox>
    );
  } else return null;
}

export default WriteSchemaPublishingPermit;
