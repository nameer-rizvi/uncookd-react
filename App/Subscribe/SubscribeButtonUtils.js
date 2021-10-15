import { label } from "../../../shared";

export const makeName = (action, name, hashtag) =>
  [action, name && name.username, hashtag].filter(Boolean).join("_");

export const makeTitle = (action, name, hashtag, delimiter = " to ") =>
  [action, name && label.user(name), label.hashtag(hashtag)]
    .filter(Boolean)
    .join(delimiter) + ".";
