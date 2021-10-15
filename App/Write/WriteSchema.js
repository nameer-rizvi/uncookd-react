import WriteEditor from "../WriteEditor";
import WriteSchemaSubmit from "./WriteSchemaSubmit";
import AccountVerifiedValidation from "../AccountVerifiedValidation";
import WriteSchemaPublishingPermit from "./WriteSchemaPublishingPermit";
import WriteSchemaLength from "./WriteSchemaLength";
import WriteSchemaPreview from "./WriteSchemaPreview";
import { label } from "../../../shared";

const WriteSchema = ({
  page,
  write_autosave,
  publishingPermit,
  display_name,
}) => ({
  id: "write",
  className: "page-" + page.number,
  components: [
    [
      {
        component: "Custom",
        Component: WriteEditor,
        saveButton: WriteSchemaSubmit[0],
        include: [
          "setOnSubmitConfig",
          "handleChange",
          "values",
          "postStatus",
          "errors",
        ],
        name: "rich_text_story",
        write_autosave,
        page,
        placeholder: "Tell your story...",
        required: true,
      },
    ],
    [
      {
        component: "Custom",
        Component: AccountVerifiedValidation,
      },
      {
        component: "Custom",
        Component: WriteSchemaPublishingPermit,
        publishingPermit,
      },
      {
        component: "FormFieldInput",
        name: "title",
        label: "title:",
        placeholder: "Untitled",
      },
      {
        component: "FormFieldTextarea",
        name: "description",
        label: "description:",
        rows: 3,
      },
      {
        component: "FormFieldPillSelector",
        name: "hashtag_list",
        label: "hashtags:",
        pill: ({ item }) => label.hashtag(item),
        setQ: (q) => label.hashtag(q),
        includeCaption: true,
        valueKey: "hashtag",
      },
      {
        component: "Custom",
        Component: WriteSchemaLength,
        name: "length",
        label: "length:",
        readOnly: true,
        include: ["values"],
      },
      {
        component: "FormFieldCheckbox",
        label: "NSFW",
        name: "is_nsfw",
        $alignLabel: true,
      },
      {
        component: "Custom",
        Component: WriteSchemaPreview,
        include: ["values"],
        display_name,
        page,
      },
      ...WriteSchemaSubmit,
      {
        component: "FormPostStatus",
      },
    ],
  ][page.number],
});

export default WriteSchema;
