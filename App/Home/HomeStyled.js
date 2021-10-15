import styled from "styled-components";
import { FlexBox } from "../Element";
import { elementId } from "../../../shared";
import { px } from "../../utils";

export const HomeContainer = styled(FlexBox)`
  ${({ theme }) => theme.preset.mainWidth}

  ${elementId.feed} {
    margin-top: ${px.scale(3)};
  }

  nav#feed-nav ul.sort li.active {
    font-weight: bold;
  }
`;

export const HomeMetaContainer = styled(FlexBox)`
  ${({ theme }) => theme.preset.meta}

  #home-meta-counts,
  button#home-meta-subscribe,
  #home-meta-detail-buttons,
  ul.home-meta-detail-hashtag-recommendations,
  #home-meta-detail-cta {
    margin-bottom: ${px.scale(5)};
  }

  #home-meta-counts button:first-child,
  #home-meta-detail-cta button:first-child {
    margin-bottom: ${px.scale(2)};
  }

  h1#home-meta-header-title {
    font-style: italic;
    font-weight: normal;
    margin: ${px.scale(5)} 0 ${px.scale(10)} 0;
    font-size: ${({ theme }) => theme.fontSize.third};
    line-height: ${({ theme }) => theme.lineHeight[10]};
  }

  p.home-meta-header-description#pre {
    font-style: italic;
  }

  p.home-meta-header-description#post {
    position: absolute;
    bottom: ${px.scale(5)};
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  #home-meta-counts button {
    width: 100%;
    justify-content: flex-start;
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.ml};
  }

  #home-meta-counts svg {
    margin-right: ${px.scale(2)};
  }

  button.home-meta-detail-button {
    margin-right: ${px.scale(2)};
  }

  #home-meta-detail-cta button,
  #home-meta-detail-cta a {
    width: 100%;
    max-width: 300px;
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  nav#home-meta-detail-sitemap-site ul {
    flex-wrap: wrap;
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  nav#home-meta-detail-sitemap-site li {
    margin: 0 ${px.scale(2)} ${px.scale(1)} 0;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint[14]}) {
    h1#home-meta-header-title {
      margin-top: ${px.scale(2)};
    }
  }
`;
