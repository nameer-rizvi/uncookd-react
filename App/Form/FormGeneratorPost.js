import { parseErrorString, request } from "../../utils";

function FormGeneratorPost({
  onSubmitConfig,
  sanitizedValues,
  addValues,
  setPostStatus,
  resetForm,
  handleChange,
  ...rest
}) {
  const {
    allowAnonymousRequest,
    url,
    message,
    resetForm: onSuccessResetForm,
    onSuccess: onSucessHandler,
    onFail: onFailHandler,
  } = onSubmitConfig;

  const method = "POST";

  const formValues = { ...sanitizedValues, ...addValues };

  const onStart = () => setPostStatus(message.pending);

  function onSuccess(responseData) {
    if (onSuccessResetForm) resetForm();
    if (onSucessHandler)
      onSucessHandler({ responseData, formValues, handleChange });
    setPostStatus(message.success);
  }

  function onFail(responseError) {
    if (onFailHandler) onFailHandler({ responseError });
    setPostStatus(parseErrorString(responseError, message.error));
  }

  request({
    allowAnonymousRequest,
    url,
    method,
    data: formValues,
    onStart,
    onSuccess,
    onFail,
    ...rest,
  });
}

export default FormGeneratorPost;
