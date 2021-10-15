import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  ArticleContainer,
  ArticleSectionLeft,
  ArticleSectionMain,
  ArticleHeader,
  ArticleFooter,
  ArticleTime,
} from "../Article";
import { Button } from "../Element";
import { modalClose } from "../../redux";

function ArticleNotification({ index = "", noted_at, link = "", note = "" }) {
  const { note_last } = useSelector((state) => state.user);

  const isNewNotification = new Date(noted_at) >= new Date(note_last);

  const style = isNewNotification ? { fontWeight: "bold" } : {};

  const svg = isNewNotification ? "bell_fill" : "bell_empty";

  const dispatch = useDispatch();

  const closeModal = () => dispatch(modalClose());

  return (
    <ArticleContainer id={index} className="article-notification">
      <ArticleSectionLeft svg={svg} />
      <ArticleSectionMain>
        <ArticleHeader style={style}>
          <Button
            initialStyle
            to={link}
            onClick={closeModal}
            title="Click here to see more."
          >
            {note}
          </Button>
        </ArticleHeader>
        <ArticleFooter>
          <ArticleTime noted_at={noted_at} index={index} style={style} />
        </ArticleFooter>
      </ArticleSectionMain>
    </ArticleContainer>
  );
}

export default ArticleNotification;
