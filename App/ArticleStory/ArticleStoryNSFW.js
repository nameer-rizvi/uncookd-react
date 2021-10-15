import React from "react";
import { useToggle } from "../../hooks";
import { Button } from "../Element";

function ArticleStoryNSFW({ is_nsfw, index }) {
  const toggle = useToggle();

  return is_nsfw ? (
    <Button
      title="This story is rated 'not safe for work' by the author."
      name={`${index}_nsfw`}
      onClick={toggle.change}
    >
      {toggle.state ? `"not safe for work"` : "nsfw"}
    </Button>
  ) : null;
}

export default ArticleStoryNSFW;
