import React from "react";
import { useSelector } from "react-redux";
import { isStringValid } from "simpul";
import { URLQuery } from "../../utils";
import { history } from "../../redux";
import { FlexBox, Button, SpanBracket } from "../Element";
import { LabelRight } from "../Form";
import Autosuggest from "../Autosuggest";

function HeaderSearch({ id, hideAutosuggest, style, searchToggleChange }) {
  const inputId = id + "-search";

  const { pathname } = useSelector((state) => state.router.location);

  function onKeyDown({ key, target: { value: query } }, reset) {
    if (isStringValid(query) && key === "Enter") {
      const isHomeHashtagSearch =
        query.startsWith("#") && query.split(" ").length === 1;

      const isUserProfileSearch =
        query.startsWith("@") && query.split(" ").length === 1;

      let search = isHomeHashtagSearch
        ? "/" + URLQuery.generate({ hashtag: query.substring(1) })
        : isUserProfileSearch
        ? "/user/" + query.substring(1)
        : pathname.startsWith("/search/user")
        ? "/search/user"
        : pathname.startsWith("/search/story")
        ? "/search/story"
        : pathname.startsWith("/search/comment")
        ? "/search/comment"
        : pathname.startsWith("/search/hashtag")
        ? "/search/hashtag"
        : query.startsWith("@")
        ? "/search/user"
        : query.includes("by")
        ? "/search/story"
        : query.includes("comment")
        ? "/search/comment"
        : query.startsWith("#")
        ? "/search/hashtag"
        : "/search/user";

      if (!isHomeHashtagSearch && !isUserProfileSearch)
        search += URLQuery.generate({ q: query });

      reset();

      history.push(search);
    }
  }

  const onAction = ({ link }) => link && history.push(link);

  const AutosuggestProps = {
    id: inputId,
    onKeyDown,
    onAction,
    hideAutosuggest,
    style: { fontSize: 14, padding: "3px 7px", maxHeight: 23 }, // maxHeight for Safari
    // includeCaption: true,
  };

  return (
    <FlexBox style={style} $align="inherit" $row $flex1>
      {searchToggleChange ? (
        <Button
          svg="close"
          name={`close_${id}_search`}
          title={`Close ${id} search input.`}
          style={{ marginRight: "5px" }}
          onClick={() => searchToggleChange()}
        />
      ) : null}
      <LabelRight htmlFor={inputId}>search</LabelRight>
      <SpanBracket style={{ flex: "1" }}>
        <Autosuggest {...AutosuggestProps} />
      </SpanBracket>
    </FlexBox>
  );
}

export default HeaderSearch;
