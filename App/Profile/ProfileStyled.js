import styled from "styled-components";
import { FlexBox } from "../Element";
import { px } from "../../utils";

export const ProfileContainer = styled(FlexBox)(
  ({ theme }) => theme.preset.mainWidth
);

export const ProfileMetaContainer = styled(FlexBox)`
  ${({ theme }) => theme.preset.meta}

  #section-one,
  #by {
    margin-bottom: ${px.scale(6)};
  }

  h1,
  #username {
    margin-bottom: ${px.scale(1)};
  }

  .verified-badge {
    margin: ${px.scale(1)} 0;
  }

  .subscribe {
    margin: ${px.scale(2)} 0;
  }

  // * px.scale for ul & li top/bottom should add to .subscribe margin...

  ul {
    flex-wrap: wrap;
    margin: ${px.scale(1)} 0; // * px.scale should match ul li marginTop & marginBottom...
  }

  ul li {
    margin: ${px.scale(1)} ${px.scale(2)} ${px.scale(1)} 0; // * px.scale should match ul margin...
  }

  #bio {
    width: auto;
    font-style: italic;
    font-size: ${({ theme }) => theme.fontSize.ml};
    line-height: ${({ theme }) => theme.lineHeight[8]};
    margin-bottom: ${px.scale(3)};
  }

  #birthday time {
    margin-left: 2px;
  }

  #birthday svg {
    margin-left: ${px.scale(1)};
  }

  #contact {
    margin-top: ${px.scale(3)};
  }

  #contact .pipe {
    margin: 0 ${px.scale(1)};
  }

  // TABLET STYLE

  @media screen and (max-width: ${({ theme }) => theme.breakpoint[14]}) {
    #by {
      margin-bottom: ${px.scale(3)};
    }

    // WITHOUT BIO STYLE

    &:not(#with-bio) {
      #section-one {
        margin-bottom: ${px.scale(3)};
      }
      #bio {
        margin-bottom: ${px.scale(1.5)};
      }
      #contact {
        margin-top: ${px.scale(1.5)};
      }
    }

    // WITH BIO STYLE

    &#with-bio {
      flex-direction: row;
      #section-one {
        min-width: 50%;
        max-width: 50%;
        box-sizing: border-box;
        margin-bottom: 0;
        padding-right: ${px.scale(12)};
      }
      #section-two {
        justify-content: center;
        flex-grow: 1;
      }
    }
  }

  // MOBILE STYLE

  @media screen and (max-width: ${({ theme }) => theme.breakpoint[6]}) {
    // WITH BIO STYLE

    &#with-bio {
      flex-direction: column;
      #section-one {
        min-width: unset;
        max-width: unset;
        padding-right: unset;
        margin-bottom: ${px.scale(3)};
      }
      #bio {
        margin-bottom: ${px.scale(1.5)};
      }
      #contact {
        margin-top: ${px.scale(1.5)};
      }
    }
  }
`;
