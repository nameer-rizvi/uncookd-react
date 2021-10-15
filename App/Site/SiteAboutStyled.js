import styled from "styled-components";
import SiteStyled from "./SiteStyled";

const SiteAboutStyled = styled(SiteStyled)`
  align-items: center;
  max-width: 420px;

  h2,
  p,
  small,
  .about-svg-chart,
  .about-links {
    margin-top: 70px;
    text-align: center;
  }

  nav.about-links,
  nav.about-links ul,
  .about-svg-chart {
    width: 100%;
  }

  .about-svg-chart svg.bookmark {
    margin-top: 5px;
  }

  .about-links {
    li:not(:first-child) {
      border-left: solid 1px;
    }

    button,
    a {
      margin-top: 0;
      height: 21px;
    }
  }
`;

export default SiteAboutStyled;
