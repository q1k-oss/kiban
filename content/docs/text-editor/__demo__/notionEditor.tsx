"use client";

import { TextEditor } from "@q1k-oss/kiban";

export default function NotionEditorDemo() {
  return (
    <div className="w-full min-h-[400px] border rounded-lg p-4">
      <TextEditor
        value="<h1>Notion-style Editor</h1><p>Type '/' to see the floating command menu. Select text to see the bubble menu.</p>"
        onChange={(content) => console.log(content)}
        variant="NOTION_EDITOR"
        placeholder="Type '/' for commands..."
      />
    </div>
  );
}
