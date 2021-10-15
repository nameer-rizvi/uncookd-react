import React from "react";
import { P } from "../Element";

function HomeMetaHeaderDescriptPost({ isLoggedIn, filter2, isDefault }) {
  const descriptPost =
    isLoggedIn && filter2 === "author subscriptions only"
      ? "by authors you're subscribed to"
      : isLoggedIn && filter2 === "hashtag subscriptions only" && isDefault
      ? "with hashtags you're subscribed to"
      : "";

  return descriptPost ? (
    <P className="home-meta-header-description" id="post">
      {descriptPost}.
    </P>
  ) : null;
}

export default HomeMetaHeaderDescriptPost;
