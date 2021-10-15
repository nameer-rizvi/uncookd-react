import React from "react";
import { getSearchPageMetadata } from "../../utils";
import SearchContainer from "./SearchStyled";
import { H2_1, Span, Strong } from "../Element";
import Feed from "../Feed";
import SearchFeedNav from "./SearchFeedNav";

function Search(props) {
  const searchLabel = getSearchPageMetadata(props.params);

  props.params.q_source = "search_page";

  return (
    <SearchContainer>
      <H2_1 className="search-heading">
        <Span className="padded">{searchLabel.title.page[0]}</Span>
        <Span className="padded">
          <Strong>{searchLabel.title.page[1]}</Strong>
        </Span>
      </H2_1>
      <Feed
        nav={SearchFeedNav(searchLabel)}
        requestURL="/search"
        renderError
        {...props}
      />
    </SearchContainer>
  );
}

export default Search;
