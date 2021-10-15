import { paramCase } from "change-case";

export function assignId(rest) {
  if (!rest.id) rest.id = paramCase(rest.name);

  if (!rest.id) console.warn("Missing 'id' for component with props: ", rest);

  if (!rest.name)
    console.warn("Missing 'name' for component with props: ", rest);

  return rest.id;
}
