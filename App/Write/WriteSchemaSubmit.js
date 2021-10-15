import { draftSave, draftPublish } from "../../redux";

const WriteSchemaSubmit = [
  {
    component: "FormSubmitButton",
    label: "save draft",
    name: "submit_save",
    title: "Save draft.",
    // accessKey: "s",
    $square: false,
    $underline: true,
    onSubmit: {
      url: "/draft/save",
      onSuccess: draftSave,
      message: {
        pending: "Saving draft...",
        success: "Saved draft.",
        error: "Failed to save draft.",
      },
    },
  },
  {
    component: "FormSubmitButton",
    label: "publish",
    name: "submit_publish",
    title: "Publish draft.",
    onSubmit: {
      url: "/draft/publish",
      onSuccess: draftPublish,
      message: {
        pending: "Publishing story...",
        success: "Published story!",
        error: "Failed to publish story.",
      },
    },
  },
];

export default WriteSchemaSubmit;
