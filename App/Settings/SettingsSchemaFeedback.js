const SettingsSchemaFeedback = {
  id: "feedback-settings",
  components: [
    // {
    //   component: "H4_2",
    //   children: "send us feedback",
    // },
    {
      component: "FormFieldTextarea",
      label:
        "Notice any bugs or unexpected behavior? Don't like something? Got any suggestions? How are you feeling?",
      name: "feedback",
      rows: 5,
      required: true,
      $column: true,
    },
    {
      component: "FormSubmitButton",
      label: "send",
      name: "submit_feedback",
      title: "Submit feedback form.",
      onSubmit: {
        resetForm: true,
        url: "/user/feedback",
        message: {
          pending: "Sending feedback...",
          success: "Feedback sent.",
          error: "Failed to send feedback.",
        },
      },
    },
    {
      component: "FormPostStatus",
    },
  ],
};

export default SettingsSchemaFeedback;
