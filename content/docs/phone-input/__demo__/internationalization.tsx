import React from "react";

import { PhoneInput } from "@q1k-oss/kiban";

export default function internationalization() {
  return (
    <div className="flex justify-center">
      <div className="p-10 w-fit ">
        <PhoneInput placeholder="Telefon numarasi" international={true} />
      </div>
    </div>
  );
}
