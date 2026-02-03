import React from "react";

import { AppIcon } from "@happect/ethereal-ui/ui/app-icon";

export default () => {
  return (
    <div className="flex items-center justify-between gap-2 w-full">
      <AppIcon
        iconName={"layout-dashboard"}
        size={40}
        className="text-muted-foreground"
      />
      <AppIcon
        iconName={"custom-folder-q1k-icon"}
        size={40}
        className="text-muted-foreground"
        source="custom"
      />
      <AppIcon
        iconName="custom-token-icon"
        size={40}
        className="text-muted-foreground"
        source="custom"
      />
      <AppIcon
        iconName={"custom-square-icon-fill"}
        size={40}
        className="text-muted-foreground"
        source="custom"
      />
      <AppIcon
        iconName={"custom-google-drive-icon"}
        size={40}
        className="text-muted-foreground"
        source="custom"
      />
      <AppIcon
        iconName={"custom-arrow-up-icon"}
        size={40}
        className="text-red-700"
        source="custom"
      />
      <AppIcon
        iconName={"custom-facebook-fill"}
        size={40}
        className="text-green-900"
        source="custom"
      />
     <AppIcon
        iconName={"custom-reddit-fill"}
        size={40}
        source="custom"
        // strokeWidth={1}
        className="text-red-600"
      />

      <AppIcon
        iconName={"custom-xtwitter"}
        size={40}
        source="custom"
        // strokeWidth={1}
      />
      <AppIcon
        iconName={"custom-linkedin-fill"}
        size={40}
        source="custom"
        className="text-amber-500"
        // strokeWidth={1}
      />
    </div>
  );
};
