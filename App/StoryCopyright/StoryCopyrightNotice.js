import React from "react";
import { Small, Button } from "../Element";

const StoryCopyrightNotice = ({ author_subscription }) =>
  author_subscription === "is_user" ? (
    <Small>
      As the author, if you would like to register an official copyright for
      this story with the US Government, please visit{" "}
      <Button
        title="Go to Copyright.gov"
        href="https://www.copyright.gov/registration/literary-works/"
        $underline
      >
        copyright.gov
      </Button>
      .
    </Small>
  ) : (
    ""
  );

export default StoryCopyrightNotice;

// <Small>
//   * {brand} ({business}) claims no rights whatsoever to &quot;{title}
//   &quot; by {name} except for as an online platform chosen by said author to
//   host their work.
// </Small>;
