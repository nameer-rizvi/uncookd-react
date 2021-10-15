import React from "react";
import { RetryContainer, RetryCore } from "./RetryStyled";
import { H1_1, H3_1, Button, ButtonResolver, Small } from "../Element";

const Retry = ({ get }) => (
  <RetryContainer className="request-retry">
    <RetryCore>
      <H1_1 $lineHeight={1}>Oh, the agony!</H1_1>
      <H3_1>
        There&apos;s no other way to say it: we failed to get all of the words
        and punctuation required for this page to work <span>:(</span>
      </H3_1>
      <Button onClick={get} name="retry" title="Try again." $underline>
        Click here to try again.
      </Button>
      <ButtonResolver resolve="reload" $underline>
        Or, click here to refresh the page.
      </ButtonResolver>
      <Small>
        If neither option works, it might help to{" "}
        <Button
          title="Go to Google's 'how to clear browser cache' search page."
          href="https://www.google.com/search?q=how+to+clear+browser+cache"
          initialStyle
          $underline
        >
          clear you browser&apos;s cache
        </Button>{" "}
        and refresh the page manually.
      </Small>
    </RetryCore>
  </RetryContainer>
);

export default Retry;
