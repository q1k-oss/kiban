"use client";
import React from "react";

import { TextEditor } from "@happect/ethereal-ui";

export default () => {
  return (
    <div>
      <TextEditor
        onChange={({ html, json, text }) => {
          console.log("HTML -> ", html);
          console.log("JSON -> ", json);
          console.log("TEXT -> ", text);
        }}
        value="<h1>Try Out Agent Text-Editor </h1>"
        variant="AGENT_EDITOR"
        editorClassName=" h-[300px]! overflow-y-auto! p-4!"
        enableHeadingAnchors={true}
      />
    </div>
  );
};
