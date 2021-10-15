import React, { Fragment } from "react";
import ContentAccessProvider from "../ContentAccess";
import { isArrayValid } from "simpul";
import FeedContentPerformance from "./FeedContentPerformance";
import ArticleList from "../ArticleList";
import FeedContentNext from "./FeedContentNext";
import FeedContentZeroState from "./FeedContentZeroState";

const FeedContent = ({
  data: {
    content_owner,
    rows,
    count_rows,
    performance,
    next,
    interruptionIndex,
    ...data
  },
  Content = {},
  nextProps,
  ...rest
}) => (
  <ContentAccessProvider {...content_owner}>
    {Content.FeedContentTop ? (
      <Content.FeedContentTop {...{ ...data, ...rest }} />
    ) : null}
    {isArrayValid(rows) ? (
      <Fragment>
        <FeedContentPerformance count={count_rows} performance={performance} />
        <ArticleList
          {...rest}
          rows={rows}
          ArticleProps={Content.ArticleProps}
          content_owner={content_owner}
        />
        {next ? (
          <FeedContentNext
            next={next}
            interruptionIndex={interruptionIndex}
            {...nextProps}
          />
        ) : null}
      </Fragment>
    ) : (
      <FeedContentZeroState
        Component={Content.ZeroState}
        content_owner={content_owner}
        {...rest}
      />
    )}
  </ContentAccessProvider>
);

export default FeedContent;
