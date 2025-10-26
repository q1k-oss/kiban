'use client'

import { addDays } from 'date-fns';
import { useState } from 'react';
import { DateRange } from 'react-day-picker';

import { Calendar } from 'ethereal-ui';

export default () => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  });
  
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="text-sm text-muted-foreground">
        {dateRange?.from ? (
          dateRange.to ? (
            <>
              Selected range: {dateRange.from.toDateString()} to {dateRange.to.toDateString()}
            </>
          ) : (
            <>Start date: {dateRange.from.toDateString()}</>
          )
        ) : (
          <>Select a date range to book</>
        )}
      </div>
      
      <Calendar
        mode="range"
        selected={dateRange}
        onSelect={setDateRange}
        numberOfMonths={2}
        className="rounded-md border"
      />
    </div>
  );
} 