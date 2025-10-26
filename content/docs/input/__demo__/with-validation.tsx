'use client'

import { CheckCircle2, XCircle } from 'lucide-react';
import { useState } from 'react';

import { Input, Label } from 'ethereal-ui';

export default () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState<boolean | null>(null);
  
  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return value === '' ? null : emailRegex.test(value);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsValid(validateEmail(value));
  };
  
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email-validation">
        Email
        {isValid !== null && (
          <span className="ml-2">
            {isValid ? (
              <CheckCircle2 className="inline h-4 w-4 text-green-500" />
            ) : (
              <XCircle className="inline h-4 w-4 text-red-500" />
            )}
          </span>
        )}
      </Label>
      <div className="relative">
        <Input
          type="email"
          id="email-validation"
          placeholder="Enter your email"
          value={email}
          onChange={handleChange}
          className={
            isValid === false 
              ? "border-red-500 pr-10 focus-visible:ring-red-500" 
              : isValid === true 
                ? "border-green-500 pr-10 focus-visible:ring-green-500" 
                : "pr-10"
          }
        />
        {isValid !== null && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            {isValid ? (
              <CheckCircle2 className="h-5 w-5 text-green-500" />
            ) : (
              <XCircle className="h-5 w-5 text-red-500" />
            )}
          </div>
        )}
      </div>
      {isValid === false && (
        <p className="text-sm text-red-500">
          Please enter a valid email address.
        </p>
      )}
    </div>
  );
} 