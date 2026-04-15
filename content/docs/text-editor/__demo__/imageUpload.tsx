"use client";

import { useState } from "react";

import { Switch, TextEditor } from "@q1k-oss/kiban";

const PLACEHOLDER_IMAGES = {
  thumbnail: "https://placehold.co/400x300/e2e8f0/64748b?text=Thumbnail+400w",
  medium: "https://placehold.co/800x600/e2e8f0/64748b?text=Medium+800w",
  full: "https://placehold.co/1200x900/e2e8f0/64748b?text=Full+1200w",
};

export default function ImageUploadDemo() {
  const [simulateError, setSimulateError] = useState(false);
  const [uploadMode, setUploadMode] = useState(true);

  const handleUpload = async (file: File) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (simulateError) {
      throw new Error("Simulated upload failure");
    }

    console.log(`Uploaded: ${file.name} (${(file.size / 1024).toFixed(1)} KB)`);
    return PLACEHOLDER_IMAGES;
  };

  const handleRemove = (src: string) => {
    console.log(`Removed image: ${src}`);
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Switch
            checked={simulateError}
            onCheckedChange={setSimulateError}
            className="data-[state=checked]:bg-red-600 data-[state=unchecked]:bg-green-600"
          />
          <span className="text-xs text-tertiary-text">
            {simulateError ? "Upload will fail" : "Upload will succeed"}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Switch
            checked={uploadMode}
            onCheckedChange={setUploadMode}
          />
          <span className="text-xs text-tertiary-text">
            {uploadMode ? "Drag & drop / file picker" : "URL link only"}
          </span>
        </div>
      </div>

      <TextEditor
        key={String(uploadMode)}
        value="<p>Drag & drop an image, paste from clipboard, or click the image button in the toolbar to upload.</p>"
        onChange={({ html }) => console.log(html)}
        variant="AGENT_EDITOR"
        editorClassName="py-4 max-h-150 overflow-y-auto"
        onImageUpload={uploadMode ? handleUpload : undefined}
        onImageRemove={handleRemove}
      />
    </div>
  );
}
