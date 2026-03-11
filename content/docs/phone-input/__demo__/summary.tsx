import React from "react";

import { PhoneInput } from "@q1k-oss/kiban";
export default function summary() {
  return (
    <div className="flex justify-center">
      <div className="p-10 w-fit ">
        <PhoneInput placeholder="Enter a phone number"/>
      </div>
    </div>
  );
}
