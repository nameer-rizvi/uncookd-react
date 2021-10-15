import { isArray } from "simpul";

export const initialState = {
  values: {},
  errors: {},
  onSubmitConfig: {},
  postStatus: "",
};

export function focus(components) {
  const name = isArray(components[0])
    ? components[0][0] && components[0][0].name
    : components[0] && components[0].name;
  const element = name && document.getElementsByName(name)[0];
  if (element) element.focus();
}

export const getRequired = (components) =>
  components
    .map((component) =>
      component.required
        ? component.name
        : isArray(component)
        ? getRequired(component)
        : null
    )
    .flat(Infinity)
    .filter(Boolean);

export const setInitialValues = (schema, data) =>
  (schema.initialValues = schema.components
    .map((component) =>
      isArray(component)
        ? component.map((subcomponent) => subcomponent.name)
        : component.components
        ? component.components.map((subcomponent) => subcomponent.name)
        : component.name
    )
    .flat()
    .filter(Boolean)
    .reduce((reducer, fieldName) => {
      if (fieldName && data[fieldName]) reducer[fieldName] = data[fieldName];
      return reducer;
    }, {}));
