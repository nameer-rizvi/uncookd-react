import { useEffect } from "react";
import { label } from "../../../shared";
import { HTMLDocument } from "../../utils";

const useCommentHTMLDocument = ({ author_username, author_display_name }) =>
  useEffect(() => {
    const byAuthor = label.author({ author_username, author_display_name });

    HTMLDocument.updateTitle("Comment " + byAuthor);

    HTMLDocument.updateDescription("See comment " + byAuthor + ".");
  }, [author_username, author_display_name]);

export default useCommentHTMLDocument;
