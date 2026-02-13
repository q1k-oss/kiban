"use client";

import { TextEditor } from "@happect/ethereal-ui";

const PLACEHOLDER_IMAGES = {
  thumbnail: "https://placehold.co/400x300/e2e8f0/64748b?text=Thumbnail+400w",
  medium: "https://placehold.co/800x600/e2e8f0/64748b?text=Medium+800w",
  full: "https://placehold.co/1200x900/e2e8f0/64748b?text=Full+1200w",
};

async function dummyImageUpload(file: File) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log(`Uploaded: ${file.name} (${(file.size / 1024).toFixed(1)} KB)`);

  return PLACEHOLDER_IMAGES;
}

export default function ImageUploadDemo() {
  return (
    
      <TextEditor
        value="<h1>Image Upload Demo</h1><p>Drag & drop an image, paste from clipboard, or click the image button in the toolbar to upload.</p>"
        onChange={({html}) => console.log(html)}
        variant="AGENT_EDITOR"
        editorClassName="py-4 max-h-150 overflow-y-auto"
        onImageUpload={dummyImageUpload}
        enableHeadingAnchors={true}
      />
    
  );
}
