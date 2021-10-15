import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { focus, initialState, getRequired } from "./FormGeneratorUtils";
import { useRequestState } from "../../hooks";
import { validate } from "../../../shared";
import FormGeneratorPost from "./FormGeneratorPost";
import { Form } from "./FormStyled";
import FormGeneratorResolver from "./FormGeneratorResolver";

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form

function FormGenerator({ initialValues, components, addValues, ...restForm }) {
  useEffect(() => {
    focus(components);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const [values, setValues] = useState(initialValues || initialState.values);
  const [errors, setErrors] = useState(initialState.errors);
  const [postStatus, setPostStatus] = useState(initialState.postStatus);
  const [onSubmitConfig, setOnSubmitConfig] = useState(
    initialState.onSubmitConfig
  );

  const {
    pending,
    setPending,
    cancelSource,
    setCancelSource,
  } = useRequestState();

  function handleChange({ ignoreAsync, ...newValue }) {
    function update(err) {
      setValues((curr) => ({ ...curr, ...newValue }));
      setErrors((curr) => ({ ...curr, [Object.keys(newValue)[0]]: err }));
      setPostStatus(!err ? err : postStatus);
    }
    // *************************************
    // Must update state prior to validation
    // to persist input's cursor position.
    update();
    // *************************************
    if (!ignoreAsync) validate(newValue).catch(update);
  }

  function handleSubmit(e) {
    if (e) e.preventDefault();
    validate(values, getRequired(components))
      .then((sanitizedValues) =>
        FormGeneratorPost({
          onSubmitConfig,
          sanitizedValues,
          addValues,
          setPostStatus,
          handleChange,
          setPending,
          cancelSource,
          setCancelSource,
          resetForm: () => {
            setValues(initialState.values);
            setErrors(initialState.errors);
            setPostStatus(initialState.postStatus);
            setOnSubmitConfig(initialState.onSubmitConfig);
          },
        })
      )
      .catch(setPostStatus);
  }

  const FormGeneratorResolverProps = {
    components,
    disabled: pending,
    setOnSubmitConfig,
    postStatus,
    values,
    errors,
    handleChange,
    formId: restForm.id,
  };

  if (!restForm.id)
    console.warn("Missing 'id' for form with props: ", restForm);

  return (
    <Form onSubmit={handleSubmit} {...restForm}>
      {components && <FormGeneratorResolver {...FormGeneratorResolverProps} />}
    </Form>
  );
}

const mapStateToProps = (state, { key, id }) => ({ key: key || id });

export default connect(mapStateToProps)(FormGenerator);
