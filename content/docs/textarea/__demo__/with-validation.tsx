'use client'

import { useState } from 'react';

import { Textarea } from 'ethereal-ui';

export default () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    
    if (!newValue) {
      setError('This field cannot be empty');
    } else if (newValue.length < 10) {
      setError('Message must be at least 10 characters');
    } else if (newValue.length > 200) {
      setError('Message cannot exceed 200 characters');
    } else {
      setError(null);
    }
  };
  
  return (
    <div className="grid gap-1.5">
      <label 
        htmlFor="message-validation" 
        className="text-sm font-medium"
      >
        Your feedback
      </label>
      <Textarea 
        id="message-validation"
        placeholder="Tell us what you think..."
        value={value}
        onChange={handleChange}
        className={`min-h-[100px] ${error ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
      />
      {error ? (
        <p className="text-sm text-red-500">{error}</p>
      ) : (
        <p className="text-sm text-muted-foreground">
          {value.length}/200 characters
        </p>
      )}
    </div>
  );
} 