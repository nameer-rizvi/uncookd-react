import React, { useMemo } from "react";
import FeedNavAssignProps from "./FeedNavAssignProps";
import { camelCase } from "change-case";
import { FlexBox } from "../Element";
import { elementId } from "../../../shared";
import FeedNav from "./FeedNav";
import FeedContentContainer from "./FeedContentContainer";
import ContentAccessProvider from "../ContentAccess";
import GetComponent from "../GetComponent";
import FeedContent from "./FeedContent";

function Feed({
  excludeContainerPadding,
  nav,
  requestURL,
  makeRequestURL,
  contentOwner,
  nextButton,
  ...props
}) {
  const className = !excludeContainerPadding ? "container-padding" : "";

  if (nav) FeedNavAssignProps(nav, props);

  const CustomComponent = props.Content && props.Content.Component;

  const componentName = camelCase(
    Object.keys(props.params)
      .map((paramKey) => props.params[paramKey])
      .join(" ")
  );

  const requestProps = {
    allowAnonymousRequest: true,
    requestCondition: Boolean(props.params.list),
    url: requestURL || makeRequestURL(props.params),
    params: props.params,
  };

  return useMemo(
    () => (
      <FlexBox id={elementId.feed} className={className} $grow>
        {nav ? (
          <FeedNav path={props.path} params={props.params} {...nav} />
        ) : null}
        <FeedContentContainer id="feed-content" className={className}>
          {CustomComponent ? (
            <CustomComponent {...props} />
          ) : (
            <ContentAccessProvider {...contentOwner}>
              <GetComponent
                componentName={componentName}
                feedName={componentName}
                Component={FeedContent}
                requestProps={requestProps}
                nextProps={{ componentName, requestProps, nextButton }}
                {...props}
              />
            </ContentAccessProvider>
          )}
        </FeedContentContainer>
      </FlexBox>
    ),
    [contentOwner, props.params] // eslint-disable-line react-hooks/exhaustive-deps
  );
}

export default Feed;
