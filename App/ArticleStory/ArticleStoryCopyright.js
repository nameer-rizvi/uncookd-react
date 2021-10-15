import React from "react";
import { Span, Button } from "../Element";

const ArticleStoryCopyright = ({ isPreview, slug, index }) =>
  isPreview ? (
    <Span>&copy;</Span>
  ) : slug ? (
    <Button
      title="See story copyright."
      name={`${index}_copyright`}
      to={`/story/${slug}/copyright`}
    >
      &copy;
    </Button>
  ) : null;

export default ArticleStoryCopyright;
