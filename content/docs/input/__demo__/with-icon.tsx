import { BadgeAlert, BadgeCheck } from "lucide-react";
import React from "react";

import { Input } from "@q1k-oss/kiban";

export default () => {
  const temp = (
    <div className="flex gap-1">
      <BadgeCheck size={20} className="text-status-text-published" />
      <p className="text-sm text-primary-text font-light">Verified</p>
    </div>
  );

  const temp2 = (
    <div className="flex gap-1">
      <BadgeAlert size={20} className="text-status-text-paused" />
      <p className="text-sm text-primary-text font-light">Verify</p>
    </div>
  );

  return (
    <div className="flex flex-col gap-4">
      <Input type="email" defaultValue="demoq1k.ai" readOnly icon={temp} />

      <Input type="email" defaultValue="demoq1k.ai" readOnly icon={temp2} />
    </div>
  );
};
