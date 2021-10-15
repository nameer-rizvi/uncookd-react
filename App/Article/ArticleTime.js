import React from "react";
import { isDate } from "simpul";
import { ArticleFooterList } from "./ArticleFooter";
import ArticleTimeButton from "./ArticleTimeButton";

function ArticleTime({ allTimestamps, index, style, ...metadata }) {
  const datekeyId = "_at";

  const datekeys = Object.keys(metadata).filter(
    (key) => key && key.endsWith(datekeyId) && isDate(metadata[key])
  );

  return datekeys.length ? (
    allTimestamps ? (
      <ArticleFooterList
        list={datekeys.map((datekey) => (
          <ArticleTimeButton
            key={datekey}
            datekeyId={datekeyId}
            datekey={datekey}
            datetime={metadata[datekey]}
            index={index}
            style={style}
          />
        ))}
      />
    ) : datekeys[0] ? (
      <ArticleTimeButton
        datekeyId={datekeyId}
        datekey={datekeys[0]}
        datetime={metadata[datekeys[0]]}
        index={index}
        style={style}
      />
    ) : null
  ) : null;
}

export default ArticleTime;
