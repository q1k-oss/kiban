import React from "react";

import { PhoneInput } from "@happect/ethereal-ui";

export default function initialValueFormat() {
  return (
    <div className="flex justify-center">
      <div className="p-10 w-fit ">
        <PhoneInput placeholder="Enter a phone number" initialValueFormat="national" />
      </div>
    </div>
  );
}
