import React, { useMemo } from "react";
import { LI } from "../Element";

// * Why not FeedListItemSimple, as opposed to FeedListWithObserver? Performance.
// ** ClassName is used by redux.comment.post.

const FeedListItemSimple = ({ Article, item, ...rest }) =>
  useMemo(
    () => (
      <LI className="article-list-item">
        <Article {...rest} {...item} />
      </LI>
    ),
    [item] // eslint-disable-line react-hooks/exhaustive-deps
  );

export default FeedListItemSimple;
