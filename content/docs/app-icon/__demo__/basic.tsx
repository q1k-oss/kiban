import React from "react";

import { AppIcon } from "@happect/ethereal-ui/ui/app-icon";

export default () => {
  return (
    <div className="flex items-center justify-between gap-2 w-full">
      <AppIcon
        iconName={"layout-dashboard"}
        size={40}
        className="text-muted-foreground"
        source="LUCIDE"
      />
      <AppIcon
        iconName={"FolderQ1kIcon"}
        size={40}
        className="text-muted-foreground"
        source="CUSTOM"
      />
      <AppIcon
        iconName="TokenIcon"
        size={40}
        className="text-muted-foreground"
        source="CUSTOM"
      />
      <AppIcon
        iconName={"rocket"}
        size={40}
        className="text-muted-foreground"
        source="LUCIDE"
      />
      <AppIcon
        iconName={"GoogleDriveIcon"}
        size={40}
        className="text-muted-foreground"
        source="CUSTOM"
      />
      <AppIcon
        iconName={"FileCSVIcon"}
        size={40}
        className="text-red-700"
        source="CUSTOM"
      />
      <AppIcon
        iconName={"FilePDFIcon"}
        size={40}
        className="text-green-700"
        source="CUSTOM"
      />
      <AppIcon
        iconName={"FileDOCIcon"}
        size={40}
        className="text-orange-700"
        source="CUSTOM"
      />
    </div>
  );
};
