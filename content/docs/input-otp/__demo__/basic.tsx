'use client'

import { useState } from 'react';

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  Button,
} from 'ethereal-ui';

export default function InputOTPBasicDemo() {
  const [value, setValue] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const handleComplete = (value: string) => {
    console.log('OTP completed:', value);
  };

  const handleVerify = () => {
    if (value.length === 6) {
      // In a real app, you would validate the OTP with your backend
      setIsVerified(true);
    }
  };

  const handleReset = () => {
    setValue('');
    setIsVerified(false);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="text-center space-y-2">
        <h3 className="text-lg font-medium">Verification Code</h3>
        <p className="text-sm text-muted-foreground">
          Enter the 6-digit code sent to your device
        </p>
      </div>

      {isVerified ? (
        <div className="flex flex-col items-center space-y-2">
          <div className="text-center p-2 bg-green-50 text-green-600 rounded-md">
            OTP verification successful!
          </div>
          <Button onClick={handleReset} variant="outline" size="sm">
            Try Again
          </Button>
        </div>
      ) : (
        <>
          <InputOTP
            value={value}
            onChange={setValue}
            maxLength={6}
            onComplete={handleComplete}
          >
            <InputOTPGroup>
              {
                Array.from({ length: 6 }).map((_, index) => (
                  <InputOTPSlot key={index} index={index} />
                ))
              }
            </InputOTPGroup>
          </InputOTP>
          
          <Button 
            onClick={handleVerify} 
            disabled={value.length !== 6}
          >
            Verify Code
          </Button>
        </>
      )}
    </div>
  );
} 