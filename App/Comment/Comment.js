import React from "react";
import useCommentHTMLDocument from "./CommentHTMLDocument";
import CommentStyled from "./CommentStyled";
import { GrayBox, FlexBox, ButtonSimulateClick } from "../Element";
import CommentContext from "./CommentContext";
import {
  CommentTags,
  CommentText,
  CommentRibbons,
  CommentDelete,
} from "../CommentElement";
import { TooltipButtonAuthor } from "../Tooltip";
import CommentFeedNav from "./CommentFeedNav";
import Feed from "../Feed";
import Page from "../Page";

function Comment(props) {
  const {
    author_id,
    author_username,
    author_display_name,
    author_is_user,
    story_slug,
    story_title,
    story_author_username,
    story_author_display_name,
    comment_reply_id,
    comment_reply_author_username,
    comment_reply_author_display_name,
    id: comment_id,
    comment_text,
    posted_at,
    edited_at,
    ...metadata
  } = props.data;

  useCommentHTMLDocument({ author_username, author_display_name });

  const index = "comment_main";

  return (
    <CommentStyled>
      <GrayBox id="comment-main">
        <CommentContext
          story_slug={story_slug}
          story_title={story_title}
          story_author_username={story_author_username}
          story_author_display_name={story_author_display_name}
          comment_reply_id={comment_reply_id}
          comment_reply_author_username={comment_reply_author_username}
          comment_reply_author_display_name={comment_reply_author_display_name}
          index={index}
          posted_at={posted_at}
          edited_at={edited_at}
        />
        <CommentTags comment_text={comment_text} />
        <TooltipButtonAuthor
          className="comment-author"
          makeLabel={(authorName) => authorName + " said:"}
          author_id={author_id}
          author_username={author_username}
          author_display_name={author_display_name}
        />
        <CommentText comment_text={comment_text} />
        <FlexBox className="comment-row">
          <CommentRibbons index={index} id={comment_id} {...metadata} />
          {author_is_user ? (
            <div className="comment-delete">
              <CommentDelete
                index={index}
                id={comment_id}
                onDelete={() => ButtonSimulateClick({ to: "/" })}
              />
            </div>
          ) : null}
        </FlexBox>
      </GrayBox>
      <Feed
        excludeContainerPadding
        nav={CommentFeedNav(props)}
        makeRequestURL={({ list }) => "/comment/list/" + list}
        {...props}
      />
    </CommentStyled>
  );
}

const PageComment = (props) => <Page Component={Comment} {...props} />;

export default PageComment;
