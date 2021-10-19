import React, { Fragment } from "react";
import { Button } from "../Element";

const ArticleInterruptionContainer = ({ title, description, href, ...rest }) =>
  href ? (
    <Button
      title={title + " " + description}
      href={href}
      initialStyle
      {...rest}
    />
  ) : (
    <Fragment {...rest} />
  );

export default ArticleInterruptionContainer;
