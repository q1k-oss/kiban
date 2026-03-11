"use client";

import { TextEditor } from "@q1k-oss/kiban";

export default function TextEditorBasicDemo() {
  return (
    <div className="w-full min-h-[400px] border rounded-lg p-4">
      <TextEditor
        value="<h1>Welcome to the Editor</h1><p>Start typing to see the rich text editor in action.</p>"
        onChange={(content) => console.log(content)}
        variant="AGENT_EDITOR"
      />
    </div>
  );
}
