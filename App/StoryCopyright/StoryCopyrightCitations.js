import React, { useState } from "react";
import { label, name } from "../../../shared";
import { endsWithPunctuation, copyText } from "simpul";
import { Button, H4Title, Span, P } from "../Element";

function StoryCopyrightCitations({
  author_username,
  author_display_name,
  title,
  published_at,
}) {
  const [copied, setCopied] = useState();

  const component = {
    authorNames: [
      label.user({
        username: author_username,
        display_name: author_display_name,
      }),
    ],
    titles: [title, !endsWithPunctuation(title) ? title + "." : title],
    publishedDates: [new Date(published_at).toDateString().split(" ")],
    url: window.location.href.split("/copyright")[0],
    website: name.main,
  };

  const StoryCopyrightCitationsConfigs = [
    {
      key: "mla",
      title: "MLA Citation",
      citation: [
        component.authorNames[0] + ".",
        `"${component.titles[1]}"`,
        component.website + ",",
        component.publishedDates[0][2],
        component.publishedDates[0][1] + ".",
        component.publishedDates[0][3] + ",",
        component.url + ".",
      ].join(" "),
    },
    {
      key: "apa",
      title: "APA Citation",
      citation: [
        component.authorNames[0] + ".",
        "(" + component.publishedDates[0][3] + ",",
        component.publishedDates[0][1],
        component.publishedDates[0][2] + ").",
        component.titles[1],
        component.website + ".",
        component.url + ".",
      ].join(" "),
    },
    {
      key: "chicago",
      title: "Chicago Citation",
      citation: [
        component.authorNames[0] + ".",
        component.publishedDates[0][3] + ".",
        `"${component.titles[1]}"`,
        component.website + ".",
        component.url + ".",
      ].join(" "),
    },
  ];

  return StoryCopyrightCitationsConfigs.map(({ key, title, citation }) => {
    const ButtonProps = { key };

    ButtonProps.name = `copy_${key}_citation`;

    ButtonProps.title = `Click to copy ${title} citation.`;

    ButtonProps.onClick = () => {
      setCopied(key);
      copyText(citation);
    };

    const copyStatus = copied === key ? "(copied!)" : "(click to copy)";

    return (
      <Button {...ButtonProps}>
        <H4Title>
          {title} <Span>{copyStatus}</Span>
        </H4Title>
        <P>{citation}</P>
      </Button>
    );
  });
}

export default StoryCopyrightCitations;
