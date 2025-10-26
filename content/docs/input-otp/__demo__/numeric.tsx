'use client'

import { REGEXP_ONLY_DIGITS } from 'input-otp';
import { useState } from 'react';

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  Button,
} from 'ethereal-ui';

export default function InputOTPNumericDemo() {
  const [value, setValue] = useState('');

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="text-center space-y-2">
        <h3 className="text-lg font-medium">PIN Entry</h3>
        <p className="text-sm text-muted-foreground">
          Enter your 4-digit PIN code
        </p>
      </div>

      <InputOTP
        value={value}
        onChange={setValue}
        maxLength={4}
        pattern={REGEXP_ONLY_DIGITS}
      >
        <InputOTPGroup>
          {
            Array.from({ length: 4 }).map((_, index) => (
              <InputOTPSlot key={index} index={index} />
            ))
          }
        </InputOTPGroup>
      </InputOTP>

      <div className="text-center text-sm text-muted-foreground">
        {value.length === 4 ? (
          <span className="text-green-600">PIN complete!</span>
        ) : (
          <span>{4 - value.length} digits remaining</span>
        )}
      </div>

      <div className="grid grid-cols-3 gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, null, 0, 'del'].map((digit, index) => (
          <Button
            key={index}
            variant="outline"
            className="h-12 w-12"
            onClick={() => {
              if (digit === 'del') {
                setValue(value.slice(0, -1));
              } else if (digit !== null && value.length < 4) {
                setValue(value + digit);
              }
            }}
            disabled={digit === null}
          >
            {digit === 'del' ? '⌫' : digit === null ? '' : digit}
          </Button>
        ))}
      </div>
    </div>
  );
} 