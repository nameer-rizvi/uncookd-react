import React from "react";
import { URLQuery } from "../../utils";
import { regex } from "../../../shared";
import { LI, Button, FlexBox, Span, UL_3 } from "../Element";

function CommentTags({ comment_text = "" }) {
  if (comment_text) {
    const tags = [];

    const refs = [
      { r: "mention", makeHref: (username) => "/user/" + username },
      { r: "hashtag", makeHref: (hashtag) => URLQuery.home(hashtag) },
    ];

    for (let i = 0; i < refs.length; i++) {
      let { r, makeHref } = refs[i];
      let matches = comment_text.match(regex[r].r);
      if (matches && matches.length) {
        for (let i = 0; i < matches.length; i++) {
          let match = matches[i];
          let to = makeHref(match.substring(1));
          if (!tags.some((tag) => tag.label === match))
            tags.push({ to, label: match });
        }
      }
    }

    if (tags.length) {
      const TagLinks = tags.map((tag, index) => (
        <LI key={index} style={{ display: "flex", marginLeft: 4 }}>
          <Button title={`Go to page for ${tag.label}.`} to={tag.to}>
            {tag.label}
          </Button>
          {index !== tags.length - 1 ? "," : ""}
        </LI>
      ));

      return (
        <FlexBox className="comment-tags" $row $wrap>
          <Span>tags:</Span> <UL_3 $wrap>{TagLinks}</UL_3>
        </FlexBox>
      );
    } else return null;
  } else return null;
}

export default CommentTags;
