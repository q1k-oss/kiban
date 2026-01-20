import React from "react";

import { TextEditor } from "@happect/ethereal-ui";

export default () => {
  return (
    <TextEditor
      variant="NOTION_EDITOR"
      value="<h1>Try Out Notion Text-Editor </h1>"
      editorClassName=" h-[300px]! overflow-y-auto! p-4!"
    />
  );
};
