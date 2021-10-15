import { useEffect } from "react";
import { HTMLDocument } from "../../utils";

const useProfileHTMLDocument = ({ name }) =>
  useEffect(() => {
    const description = `See posts, bookmarks, subscribers, and susbcriptions for ${
      name.title
    }.`;

    HTMLDocument.updateTitle(name.title);

    HTMLDocument.updateDescription(description);
  }, [name]);

export default useProfileHTMLDocument;
