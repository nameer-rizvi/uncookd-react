import React, {
  useRef,
  useCallback,
  useState,
  useEffect,
  useMemo,
} from "react";
import { useInView } from "react-intersection-observer";
import { LI } from "../Element";
import { ArticleListItemPlaceholder } from "./ArticleListItemPlaceholder";

function ArticleListItemWithObserver({ Article, item, ...rest }) {
  //
  // REFS
  //

  const ref = useRef();

  const [inViewRef, inView] = useInView({ rootMargin: "20%" });

  const setRef = useCallback(
    (node) => {
      ref.current = node;
      inViewRef(node);
    },
    [inViewRef]
  );

  //
  // HEIGHT
  //

  const { clientHeight } = (ref && ref.current) || {};

  const [height, setHeight] = useState();

  useEffect(() => {
    if (!height && height !== clientHeight) setHeight(clientHeight);
  }, [clientHeight]); // eslint-disable-line react-hooks/exhaustive-deps

  //
  // INITIALIZED
  //

  const [initialRender, setInitialRender] = useState();

  useEffect(() => {
    if (!initialRender && !inView && height) setInitialRender(true);
  }, [initialRender, inView, height]);

  //
  // RENDER
  //
  // console.log(
  //   (inView ? "✅ " : "❌ ") + (item.hashtag || item.username) + ": " + height
  // );

  return useMemo(
    () => (
      <LI className="article-list-item" ref={setRef}>
        {initialRender && !inView && height ? (
          <ArticleListItemPlaceholder $height={height} />
        ) : (
          <Article {...rest} {...item} />
        )}
      </LI>
    ),
    [inView, height, item] // eslint-disable-line react-hooks/exhaustive-deps
  );
}

export default ArticleListItemWithObserver;
