import React from "react";
import ArticleHashtag from "../../ArticleHashtag";

const SiteSandboxPlaygroundArticleHashtag = () => (
  <div>
    <ArticleHashtag
      index="hashtag_0"
      hashtag="kafkaesque"
      subscription={0}
      count_stories={1234}
      count_subscribers={12}
      subscribed_at={new Date()}
      // excludeTooltip
      // excludeTooltipSubscribeButton
      // excludeArticleSubscribeButton
    />
  </div>
);

export default SiteSandboxPlaygroundArticleHashtag;
