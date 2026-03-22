import React from "react";

import { AppIcon } from "@q1k-oss/kiban/ui/app-icon";

export default () => {
  return (
    <div className="flex items-center gap-6">
      <AppIcon iconName="home" size={28} />
      <AppIcon iconName="search" size={28} />
      <AppIcon iconName="settings" size={28} />
      <AppIcon iconName="bell" size={28} />
      <AppIcon iconName="user" size={28} />
      <AppIcon iconName="mail" size={28} />
      <AppIcon iconName="heart" size={28} />
      <AppIcon iconName="star" size={28} />
    </div>
  );
};
