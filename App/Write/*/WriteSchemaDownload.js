// import React from "react";
// import { Button } from "../Element";
// import { stripHtml } from "string-strip-html";
// import { label, name } from "../../../shared";
// import { snakeCase } from "change-case";

// function download(values) {
//   const title = label.title(values.title);

//   let story = values.rich_text_story;

//   if (story) {
//     story = story.replace("<br>", "\n\n");
//     story = stripHtml(story).result;
//   }

//   const file = [title, story].filter(Boolean).join("\n\n");

//   const blob = new Blob([file], { type: "text/plain" });

//   let link = document.createElement("a");

//   link.style = "display: none";

//   link.href = window.URL.createObjectURL(blob);

//   link.download =
//     snakeCase(`${name.main} draft ${label.title(values.title)}`) + ".txt";

//   document.body.appendChild(link);

//   link.click();

//   document.body.removeChild(link);
// }

// const WriteSchemaDownload = ({ disabled, values }) => (
//   <Button
//     name="download_draft_text"
//     title="Download draft text as a .txt file."
//     onClick={() => download(values)}
//     disabled={disabled}
//     $underline
//   >
//     download text
//   </Button>
// );

// export default WriteSchemaDownload;
