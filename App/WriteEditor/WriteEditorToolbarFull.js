import React from "react";
import { joinAttr } from "../../utils";
import { Button } from "../Element";
import { font } from "../../../shared";
import { noop } from "simpul";
import WriteEditorToolbarMessage from "./WriteEditorToolbarMessage";

// NOTE: Any toolbar update will probably require updating
//       the ALLOWED_TAGS/ALLOWED_ATTR properties for DOMPurifyOptions
//       located @ "../../shared/validate/sanitizedPayload.js"
//
// NOTE: React/ESLint requires there to be a function handler for the
//       font select (especially since a "value=fontValue" needs to be
//       declared for rendering/labeling purposes), but because Quill.js
//       has its own controls we use "noop" as a placeholder for the
//       onChange/onBlur methods on the element.

const WriteEditorToolbarFull = ({
  className,
  showMinimizedToolbar,
  fontValue,
  message,
}) => (
  <div className={joinAttr.className(["full", className])}>
    <Button
      svg="close"
      name="close_editor_toolbar"
      title="Close editor toolbar."
      className="toolbar-custom"
      onClick={showMinimizedToolbar}
    />
    <section>
      <section>
        <span className="ql-formats">
          <select
            className="ql-font ql-active"
            value={fontValue}
            onChange={noop}
            onBlur={noop}
          >
            {font.configs.map(({ key, label }) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        </span>
        <span className="ql-formats">
          <select className="ql-size ql-active" />
        </span>
      </section>
      <section style={{ marginTop: 5 }}>
        <span className="ql-formats">
          <button className="ql-bold" />
          <button className="ql-italic" />
          <button className="ql-underline" />
          <button className="ql-strike" />
        </span>
        <span className="ql-formats">
          <button className="ql-blockquote" />
          <button className="ql-list" value="ordered" />
          <button className="ql-list" value="bullet" />
          <select className="ql-align" />
        </span>
        <WriteEditorToolbarMessage message={message} />
      </section>
    </section>
  </div>
);

export default WriteEditorToolbarFull;
