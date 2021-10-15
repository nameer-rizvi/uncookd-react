import React, { Fragment } from "react";
import { P, ButtonResolver } from "../Element";

function HomeFeedZeroState({
  params: { sort, filter, filter2 },
  title,
  isDefault,
  isLoggedIn,
}) {
  const intro = "We couldn't find any";

  const sortBlurb = sort === "newest" ? "new" : sort;

  title = !isDefault && title;

  const filterBlurb = sort === "top" && filter && `for ${filter}`;

  const subscriptions =
    isLoggedIn && filter2 === "author subscriptions only"
      ? "from authors you're subscribed to"
      : isLoggedIn && filter2 === "hashtag subscriptions only" && isDefault
      ? "with hashtags you're subscribed to"
      : null;

  const message =
    [intro, sortBlurb, title, "stories", filterBlurb, subscriptions]
      .filter(Boolean)
      .join(" ") + ".";

  return (
    <Fragment>
      <P>{message}</P>
      <ButtonResolver resolve="home" $underline>
        Click here to see stories trending right now instead.
      </ButtonResolver>
    </Fragment>
  );
}

export default HomeFeedZeroState;
