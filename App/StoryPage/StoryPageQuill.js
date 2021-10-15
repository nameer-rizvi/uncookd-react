import React from "react";
import { isStringValid } from "simpul";
import Quill from "../Quill";

const StoryPageQuill = ({ rich_text_story }) =>
  isStringValid(rich_text_story) ? (
    <Quill
      rich_text={rich_text_story}
      modules={{ toolbar: false }}
      style={{ fontFamily: "inherit" }}
      readOnly
    />
  ) : null;

export default StoryPageQuill;
