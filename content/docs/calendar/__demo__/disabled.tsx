'use client'

import { addDays, isBefore, isAfter, isSameDay } from 'date-fns';
import { useState } from 'react';

import { Calendar } from 'ethereal-ui';

export default () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  // Create a list of past dates to disable
  const today = new Date();
  
  // Disable weekends (Saturday and Sunday)
  const isWeekend = (date: Date) => {
    const day = date.getDay();
    return day === 0 || day === 6;
  };
  
  // Disable specific dates (e.g., holidays)
  const holidays = [
    new Date(today.getFullYear(), today.getMonth(), 15),
    new Date(today.getFullYear(), today.getMonth(), 20),
    new Date(today.getFullYear(), today.getMonth(), 25),
  ];
  
  const isHoliday = (date: Date) => {
    return holidays.some(holiday => isSameDay(holiday, date));
  };
  
  // Combined disabling function
  const disabledDays = [
    {
      before: today,
    },
    {
      after: addDays(today, 30),
    },
    isWeekend,
    isHoliday,
  ];
  
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="text-sm text-muted-foreground">
        {date ? `Selected: ${date.toDateString()}` : 'Select a date'}
      </div>
      
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        disabled={disabledDays}
        className="rounded-md border"
        footer={
          <div className="text-center text-sm text-muted-foreground mt-4">
            <p>Disabled: Past dates, future dates beyond 30 days, weekends, and holidays (15th, 20th, 25th)</p>
          </div>
        }
      />
    </div>
  );
} 