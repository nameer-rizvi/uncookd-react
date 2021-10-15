import { useEffect } from "react";
import { label } from "../../../shared";
import { HTMLDocument } from "../../utils";

const useStoryHTMLDocument = ({ title, description, slug, ...author }) =>
  useEffect(() => {
    const full = label.title(title) + " " + label.author(author);

    HTMLDocument.updateTitle(full);

    const descriptionUpdate = !description ? `Read ${full}.` : description;

    HTMLDocument.updateDescription(descriptionUpdate);
  }, [slug]); // eslint-disable-line react-hooks/exhaustive-deps

export default useStoryHTMLDocument;
