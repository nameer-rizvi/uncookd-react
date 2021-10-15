import React from "react";
import { Nav, Button, SpanCircle, SVG } from "../Element";
import { socialMedia, url, name } from "../../../shared";
import { capitalCase } from "change-case";

const NavSocialMedia = (props) => (
  <Nav
    id="sitemap-social-media"
    style={{ li: { margin: "10px 10px 15px 0px" } }}
    items={[...socialMedia.configs, { key: "github" }].map((sm) =>
      url[sm.key] ? (
        <Button
          title={`Go to ${name.main}'s ${capitalCase(sm.key)} page.`}
          href={url[sm.key]}
        >
          <SpanCircle>
            <SVG name={sm.key} />
          </SpanCircle>
        </Button>
      ) : null
    )}
    {...props}
  />
);

export default NavSocialMedia;
