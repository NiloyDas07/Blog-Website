import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

import conf from "../conf/conf";

export default function RTE({ control, name, label, defaultValue }) {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={name} className="mb-1 inline-block pl-1">
          {label}
        </label>
      )}

      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            apiKey={conf.tinyMCEKey}
            initialValue={defaultValue}
            init={{
              height: 500,
              menubar: true,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
}
