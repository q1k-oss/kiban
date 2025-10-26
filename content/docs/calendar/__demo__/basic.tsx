'use client'

import { useState } from 'react';

import { Calendar } from 'ethereal-ui';

export default () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  return (
    <div className="flex justify-center">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    </div>
  );
} 