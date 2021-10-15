import { commentPost } from "../../redux";
import { capitalize } from "simpul";

const CommentFormSchema = (type, feedName) => ({
  id: type,
  components: [
    {
      component: "FormFieldTextarea",
      name: "comment_text",
      placeholder: "Thoughts?",
      rows: 5,
      required: true,
      hideLabel: true,
      $column: true,
    },
    {
      component: "FormSubmitButton",
      label: "post",
      name: "submit_" + type,
      title: `Post ${type}.`,
      onSubmit: {
        resetForm: true,
        url: "/comment",
        onSuccess: (response) => commentPost({ ...response, feedName }),
        message: {
          pending: `Posting ${type}...`,
          success: `${capitalize(type)} posted.`,
          error: `Failed to post ${type}.`,
        },
      },
    },
    {
      component: "FormPostStatus",
    },
  ],
});

export default CommentFormSchema;
