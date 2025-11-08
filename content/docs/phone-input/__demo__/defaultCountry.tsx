import React from 'react'

import { PhoneInput } from '@happect/ethereal-ui'

export default function defaultCountry() {
  return (
    <div className="flex justify-center">
      <div className="p-10 w-fit ">
        <PhoneInput placeholder="Enter a phone number" defaultCountry="IN" />
      </div>
    </div>
  )
}
