import React from "react";
import NotFoundQuotes from "./NotFoundQuotes";
import NotFoundStyled from "./NotFoundStyled";
import { H1, ButtonResolver, SpanBracket, Blockquote, Cite } from "../Element";

function NotFound() {
  const randomIndex = Math.floor(Math.random() * NotFoundQuotes.length);

  const { quote, author } = NotFoundQuotes[randomIndex];

  return (
    <NotFoundStyled>
      <H1>4 OH 4</H1>
      <ButtonResolver resolve="home" $hoverUnderline>
        <SpanBracket>click here to go home</SpanBracket>
      </ButtonResolver>
      <Blockquote>
        &quot;{quote},&quot; said <Cite>{author}</Cite>.
      </Blockquote>
    </NotFoundStyled>
  );
}

export default NotFound;
