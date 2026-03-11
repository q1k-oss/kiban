"use client";

import { TextEditor } from "@q1k-oss/kiban";

export default function CustomEntriesDemo() {
  return (
    <div className="w-full min-h-[400px] border rounded-lg p-4">
      <TextEditor
        value="<h1>Custom Configuration</h1><p>This editor has custom font sizes, colors, and highlight options.</p>"
        onChange={(content) => console.log(content)}
        variant="AGENT_EDITOR"
        headingLevels={[1, 2, 3, 4]}
        fontSizes={[
          { value: "12px", label: "Small" },
          { value: "16px", label: "Normal" },
          { value: "20px", label: "Large" },
          { value: "28px", label: "Extra Large" },
        ]}
        colors={["#000000", "#ef4444", "#22c55e", "#3b82f6", "#a855f7"]}
        highlightColors={[
          { color: "#fef08a", label: "Yellow" },
          { color: "#bbf7d0", label: "Green" },
          { color: "#bfdbfe", label: "Blue" },
          { color: "#fecaca", label: "Red" },
        ]}
      />
    </div>
  );
}
