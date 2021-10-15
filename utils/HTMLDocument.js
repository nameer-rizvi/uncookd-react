import { name, description } from "../../shared";

const updateMetas = (metas, update) =>
  metas.forEach((meta) => {
    const element = document.getElementsByTagName("meta")[meta];
    if (element) element.content = update;
  });

function updateTitle(update) {
  const title = [update, name.main].filter(Boolean).join(" - ");
  document.title = title;
  updateMetas(["og:title", "twitter:title"], title);
}

const updateDescription = (update) =>
  updateMetas(["description", "og:description"], update || description.main);

export const HTMLDocument = { updateTitle, updateDescription };
