import React from "react";

import { TextEditor } from "@happect/ethereal-ui";

export default () => {
  const customFontSizes = [
    { value: "10px", label: "Tiny" },
    { value: "14px", label: "Small" },
    { value: "18px", label: "Medium" },
    { value: "24px", label: "Large" },
    { value: "36px", label: "Huge" },
  ];

  const customColors = [
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
    "#00FFFF",
  ];

  const customHighlightColors = [
    { color: "#ffeb3b", label: "Yellow" },
    { color: "#4caf50", label: "Green" },
    { color: "#f44336", label: "Red" },
    { color: "transparent", label: "None" },
  ];

  return (
    <TextEditor
      value="<h1>Try Out Text-Editor's Custom Configuration</h1>"
      editorClassName=" h-[300px]! overflow-y-auto! p-4!"
      fontSizes={customFontSizes}
      colors={customColors}
      highlightColors={customHighlightColors}
    />
  );
};
