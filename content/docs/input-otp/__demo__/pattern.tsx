'use client'

import { REGEXP_ONLY_CHARS } from 'input-otp';
import { useState } from 'react';

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  Button,
} from 'ethereal-ui';

export default function InputOTPPatternDemo() {
  const [value, setValue] = useState('');
  
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="text-center space-y-2">
        <h3 className="text-lg font-medium">Product Key</h3>
        <p className="text-sm text-muted-foreground">
          Enter your product activation key
        </p>
      </div>

      <InputOTP
        value={value}
        onChange={setValue}
        maxLength={16}
        pattern={REGEXP_ONLY_CHARS}
      >
        <InputOTPGroup className="gap-2">
          <div className="flex gap-1">
            {
              Array.from({ length: 4 }).map((_, index) => (
                <InputOTPSlot key={index} index={index} className="uppercase" />
              ))
            }
          </div>
          <div className="flex gap-1">
            {
              Array.from({ length: 4 }).map((_, index) => (
                <InputOTPSlot key={index + 4} index={index + 4} className="uppercase" />
              ))
            }
          </div>
          <div className="flex gap-1">
            {
              Array.from({ length: 4 }).map((_, index) => (
                <InputOTPSlot key={index + 8} index={index + 8} className="uppercase" />
              ))
            }
          </div>
          <div className="flex gap-1">
            {
              Array.from({ length: 4 }).map((_, index) => (
                <InputOTPSlot key={index + 12} index={index + 12} className="uppercase" />
              ))
            }
          </div>
        </InputOTPGroup>
      </InputOTP>

      {value.length === 16 && (
        <div className="text-center p-2 bg-green-50 text-green-600 rounded-md">
          Valid product key format!
        </div>
      )}

      <div className="flex gap-2">
        <Button
          variant="outline"
          onClick={() => {
            setValue('');
          }}
          disabled={value.length === 0}
        >
          Clear
        </Button>
        <Button
          onClick={() => {
            // Generate a random product key for demo purposes
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            let result = '';
            for (let i = 0; i < 16; i++) {
              result += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            setValue(result);
          }}
        >
          Generate Sample Key
        </Button>
      </div>
    </div>
  );
} 