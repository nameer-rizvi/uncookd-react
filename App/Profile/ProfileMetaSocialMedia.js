import React from "react";
import { Nav, Button, SpanCircle, SVG } from "../Element";
import { socialMedia as socialMediaUtils } from "../../../shared";
import { paramCase, capitalCase } from "change-case";

const ProfileMetaSocialMedia = ({ exists, keys, extracted, name }) =>
  exists ? (
    <Nav
      id="social-media-links"
      items={keys.map((_key) => {
        const { label, key, link } = socialMediaUtils.get(_key);

        const id = paramCase(_key);

        const title = `Go to ${capitalCase(label)} page for ${name.title}.`;

        const url = extracted[_key];

        const smartHref = url.includes(key.toLowerCase() + ".")
          ? url.includes("http")
            ? url
            : "https://" + url
          : link(url);

        return (
          <Button key={_key} id={id} title={title} href={smartHref}>
            <SpanCircle>
              <SVG name={key} />
            </SpanCircle>
          </Button>
        );
      })}
    />
  ) : null;

export default ProfileMetaSocialMedia;
