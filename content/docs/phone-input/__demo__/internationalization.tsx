import React from "react";

import { PhoneInput } from "@happect/ethereal-ui";

export default function internationalization() {
  return (
    <div className="flex justify-center">
      <div className="p-10 w-fit ">
        <PhoneInput placeholder="Telefon numarasi" international={true} />
      </div>
    </div>
  );
}
