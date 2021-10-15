import React from "react";
import FormButtonResolver from "./FormButtonResolver";
import FormFieldCheckbox from "./FormFieldCheckbox";
import FormFieldFieldset from "./FormFieldFieldset";
import FormFieldInput from "./FormFieldInput";
import FormFieldPillSelector from "./FormFieldPillSelector";
import FormFieldRange from "./FormFieldRange";
import FormFieldSelect from "./FormFieldSelect";
import FormFieldTextarea from "./FormFieldTextarea";
import FormPostStatus from "./FormPostStatus";
import FormSubmitButton from "./FormSubmitButton";
import { H4_2 } from "../Element";

const resolver = {
  Custom: ({ Component, ...rest }) => <Component {...rest} />,
  FormButtonResolver,
  FormFieldCheckbox,
  FormFieldFieldset,
  FormFieldInput,
  FormFieldPillSelector,
  FormFieldRange,
  FormFieldSelect,
  FormFieldTextarea,
  FormPostStatus,
  FormSubmitButton,
  H4_2,
};

function FormGeneratorResolver(props) {
  const {
    components,
    disabled,
    setOnSubmitConfig,
    postStatus,
    values,
    errors,
    handleChange,
  } = props;

  function componentsMap({ include, component, ...restComponent }, key) {
    if (resolver[component]) {
      let componentProps = { key, disabled, ...restComponent };

      const { name } = componentProps;

      if (include) {
        include.forEach((includeKey) => {
          if (props[includeKey]) componentProps[includeKey] = props[includeKey];
        });
      }

      if (component === "FormFieldFieldset") {
        componentProps = { ...props, ...componentProps };
      } else if (component === "FormSubmitButton") {
        componentProps.setOnSubmitConfig = setOnSubmitConfig;
      } else if (component === "FormPostStatus") {
        componentProps.postStatus = postStatus;
      } else if (component !== "Custom" && component !== "FormButtonResolver") {
        componentProps.value = values[name];
        componentProps.error = errors[name];
        componentProps.onChange = (e) =>
          handleChange({ [name]: e && e.target ? e.target.value : e });
      }

      return resolver[component](componentProps);
    } else {
      console.warn("Missing component: " + component);
      return component;
    }
  }

  return components.map(componentsMap);
}

export default FormGeneratorResolver;
