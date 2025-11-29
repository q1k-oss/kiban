import { BadgeAlert } from "lucide-react";
import React from "react";

import { PhoneInput } from "@happect/ethereal-ui";


export default () => {
    
  const UnVerifiedBadge = (
    <div className="flex gap-1 cursor-pointer">
      <BadgeAlert size={20} className="text-status-text-paused" />
      <p className="text-sm text-primary-text font-light">Verify</p>
    </div>
  );
  return (
    <div className="flex justify-center">
      <div className="p-10 w-lg ">
        <PhoneInput placeholder="Enter a phone number" icon={UnVerifiedBadge} className="px-0"/>
      </div>
    </div>
  );
};
