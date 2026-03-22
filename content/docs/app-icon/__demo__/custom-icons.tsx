import React from "react";

import { AppIcon } from "@q1k-oss/kiban/ui/app-icon";

const customIcons = [
  "custom-q1k-logo",
  "custom-folder-q1k-icon",
  "custom-token-icon",
  "custom-square-icon-fill",
  "custom-google-drive-icon",
  "custom-ai-stars",
  "custom-facebook-fill",
  "custom-reddit-fill",
  "custom-xtwitter",
  "custom-linkedin-fill",
  "custom-arrow-up-icon",
  "custom-check-icon",
  "custom-create-agent-icon",
  "custom-filter-icon",
  "custom-paper-clip-icon",
  "custom-file-csv-icon",
  "custom-file-pdf-icon",
  "custom-file-doc-icon",
  "custom-file-txt-icon",
  "custom-empty-doc-icon",
  "custom-full-preview-play",
  "custom-jira-icon",
  "custom-dropbox-icon",
  "custom-gmail-icon"
] as const;

export default () => {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 gap-6">
      {customIcons.map((name) => (
        <div key={name} className="flex flex-col items-center gap-2">
          <AppIcon
            iconName={name}
            size={32}
            source="custom"
            className="text-muted-foreground"
          />
          <span className="text-[10px] text-muted-foreground text-center leading-tight break-all">
            {name.replace("custom-", "")}
          </span>
        </div>
      ))}
    </div>
  );
};
