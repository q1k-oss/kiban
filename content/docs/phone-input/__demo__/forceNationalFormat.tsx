import React from "react";

import { PhoneInput } from "@q1k-oss/kiban";

export default function forceNationalFormat() {
  return (
    <div className="flex justify-center">
      <div className="p-10 w-fit ">
        <PhoneInput
          placeholder="Enter a phone number"
          defaultCountry="IN"
          initialValueFormat="national"
        />
      </div>
    </div>
  );
}
