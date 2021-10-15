import React from "react";
import { isNumber, numberLabel } from "simpul";
import { Button, Span } from "../Element";

const ArticleStoryActivity = ({ index: storyIndex, slug, ...metadata }) =>
  [
    { activity: "views" },
    { activity: "likes", isLink: true },
    { activity: "comments", isLink: true },
  ].map(({ activity, isLink }, activityIndex) => {
    const count = metadata["count_" + activity];

    if (isNumber(count)) {
      const label = numberLabel(count, activity).full;

      const ButtonProps = {
        key: activityIndex,
        title: `See story ${activity}.`,
        name: `${storyIndex}_count_${activity}`,
        to: `/story/${slug}/${activity}`,
      };

      return slug && isLink ? (
        <Button {...ButtonProps}>{label}</Button>
      ) : (
        <Span key={activityIndex}>{label}</Span>
      );
    } else return null;
  });

export default ArticleStoryActivity;
