import React from "react";
import ArticleUser from "../../ArticleUser";

const SiteSandboxPlaygroundArticleUser = () => (
  <div>
    <ArticleUser
      index="user_0"
      svg="like"
      id={100}
      user_id={116}
      username="nameer"
      display_name="Abram Lagas"
      bio="Hello - nice to meet you! I like to write stories!"
      count_subscribers={1000}
      count_stories={100}
      subscribed_at={new Date()}
      joined_at={new Date("June 4 2021")}
      is_verified={1}
      subscription="is_private_requested"
      content_access={true}
      subscriber="is_requested"
      // excludeTooltip
      excludeTooltipSubscribeButton
      excludeArticleSubscribeButton
      // excludeArticleSubscriberButtons
    />
  </div>
);

export default SiteSandboxPlaygroundArticleUser;
