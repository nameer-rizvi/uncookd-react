import React from "react";
import QuillInitialize from "./QuillInitialize";
import QuillStyled from "./QuillStyled";
import QuillUtil from "./QuillUtil";
import { font } from "../../../shared";

// https://quilljs.com/

function Quill({ font_family, style, ...configuration }) {
  QuillInitialize(configuration);

  const hasToolbar = Boolean(
    configuration && configuration.modules && configuration.modules.toolbar
  );

  return (
    <QuillStyled
      id={QuillUtil.id.container}
      style={{ fontFamily: font.family(font_family), ...style }}
      $withToolbar={hasToolbar}
    />
  );
}

export default Quill;
