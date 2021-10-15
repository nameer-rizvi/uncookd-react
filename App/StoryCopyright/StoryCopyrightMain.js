import React from "react";
import { FlexBox, P } from "../Element";
import { label, name } from "../../../shared";

const StoryCopyrightMain = ({
  published_at,
  author_display_name,
  author_username,
  title,
}) => (
  <FlexBox className="copyright-main">
    <P>
      Copyright &copy; {new Date(published_at).getFullYear()}{" "}
      {label.author({ author_display_name, author_username })}.
    </P>
    <P>
      All rights reserved. This story (&quot;{title}
      &quot;) or any portion thereof may not be reproduced or used in any manner
      whatsoever without the express written permission of the author - as
      indicated by their username and/or display name,{" "}
      {label.user({
        display_name: author_display_name,
        username: author_username,
      })}{" "}
      - except for the use of brief quotations with proper citation.
    </P>
    <P>Published online at {name.main}.</P>
  </FlexBox>
);

export default StoryCopyrightMain;
