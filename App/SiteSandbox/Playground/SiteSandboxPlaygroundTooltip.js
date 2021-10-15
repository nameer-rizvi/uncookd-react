import React from "react";
import { TooltipButton } from "../../Tooltip";

const SiteSandboxPlaygroundTooltip = () => (
  <div>
    <TooltipButton
      Template="TooltipButtonHashtag"
      hashtag="kafkaesque"
      // count_stories={3}
      // count_subscribers={1}
      // subscription={0}
      // excludeTooltip
    />
    <TooltipButton
      Template="TooltipButtonUser"
      user_id={100}
      username="nameer"
      // display_name="WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW"
      // bio="WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW."
      // subscription="public_subscribed"
      // content_access={false}
      // is_verified={true}
      // count_stories={1000}
      // count_subscribers={1000}
      // created_at={new Date()}
      // excludeSubscribeButton
      // excludeTooltip
    />
  </div>
);

export default SiteSandboxPlaygroundTooltip;
