'use client'

import { useState } from 'react';

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
  Button,
} from 'ethereal-ui';

export default function InputOTPSeparatedDemo() {
  const [value, setValue] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = () => {
    if (value.length === 6) {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setValue('');
    setIsSubmitted(false);
  };
  
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="text-center space-y-2">
        <h3 className="text-lg font-medium">Authentication Code</h3>
        <p className="text-sm text-muted-foreground">
          Enter the code from your authenticator app
        </p>
      </div>

      {isSubmitted ? (
        <div className="flex flex-col items-center space-y-2">
          <div className="text-center p-3 bg-green-50 text-green-600 rounded-md">
            <p className="font-medium">Authenticated Successfully!</p>
            <p className="text-sm">The code {value} has been verified.</p>
          </div>
          <Button onClick={handleReset} variant="outline">
            Enter Another Code
          </Button>
        </div>
      ) : (
        <>
          <InputOTP
            value={value}
            onChange={setValue}
            maxLength={6}
          >
            <InputOTPGroup>
              {
                Array.from({ length: 3 }).map((_, index) => (
                  <InputOTPSlot key={index} index={index} />
                ))
              }
              <InputOTPSeparator>-</InputOTPSeparator>
              {
                Array.from({ length: 3 }).map((_, index) => (
                  <InputOTPSlot key={index + 3} index={index + 3} />
                ))
              }
            </InputOTPGroup>
          </InputOTP>
          
          <p className="text-sm text-muted-foreground">
            Format: XXX-XXX
          </p>
          
          <Button 
            onClick={handleSubmit} 
            disabled={value.length !== 6}
          >
            Authenticate
          </Button>
        </>
      )}
    </div>
  );
} 