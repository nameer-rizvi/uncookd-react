import styled from "styled-components";
import { FlexBox } from "../Element";

const SearchContainer = styled(FlexBox)`
  flex-grow: 1;

  h2.search-heading {
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0 40px 0;
    line-height: ${({ theme }) => theme.lineHeight[7]};

    span.padded {
      padding: 0 4px;
    }

    strong {
      display: block;
    }
  }

  ul.feed-nav-list li.active a {
    font-weight: bold;
  }

  div.container-padding {
    padding-top: 15px;
  }

  small#feed-performance {
    margin-bottom: 15px;
  }
`;

export default SearchContainer;
