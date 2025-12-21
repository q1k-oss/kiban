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
        iconName={"bot"}
        size={40}
        className="text-muted-foreground"
        source="LUCIDE"
      />
    </div>
  );
};
