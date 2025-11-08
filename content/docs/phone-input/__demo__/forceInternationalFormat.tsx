import React from "react";

import { PhoneInput } from "@happect/ethereal-ui";

export default function forceInternationalFormat() {
  return (
    <div className="flex justify-center">
      <div className="p-10 w-fit ">
        <PhoneInput
          placeholder="Enter a phone number"
          value="+91"
          defaultCountry="IN"
          international={true}
        />
      </div>
    </div>
  );
}
