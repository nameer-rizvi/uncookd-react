import React from "react";
import { SiteLink } from "../Site";
import { FlexBox, Nav, ButtonResolver } from "../Element";
import NavSocialMedia from "../NavSocialMedia";
import FooterCopyright from "../Footer/FooterCopyright";

const HomeMetaDetailSitemap = ({ isLoggedIn }) => (
  <FlexBox id="home-meta-detail-sitemap">
    <Nav
      id="home-meta-detail-sitemap-site"
      items={SiteLink.array(isLoggedIn).map((link) =>
        link ? (
          <ButtonResolver key={link} resolve={link} $hoverUnderline>
            {SiteLink.label(link)}
          </ButtonResolver>
        ) : null
      )}
    />
    <NavSocialMedia />
    <FooterCopyright />
  </FlexBox>
);

export default HomeMetaDetailSitemap;
