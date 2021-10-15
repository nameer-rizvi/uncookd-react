import { useEffect } from "react";
import { capitalize } from "simpul";
import { HTMLDocument } from "../../utils";

function useHomeHTMLDocument({ isDefault, title, description }, params) {
  useEffect(() => {
    const documentTitle = !isDefault && title;

    const documentDescription = !isDefault && capitalize(description) + ".";

    HTMLDocument.updateTitle(documentTitle);

    HTMLDocument.updateDescription(documentDescription);
  }, [isDefault, title, description]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params]);
}

export default useHomeHTMLDocument;
