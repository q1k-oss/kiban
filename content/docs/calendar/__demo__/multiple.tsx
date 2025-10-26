'use client'

import { useState } from 'react';

import { Calendar } from 'ethereal-ui';

export default () => {
  const [selectedDates, setSelectedDates] = useState<Date[] | undefined>([
    new Date(),
  ]);
  
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="text-sm text-muted-foreground">
        Selected dates: {selectedDates?.map(date => date.toDateString()).join(', ')}
      </div>
      
      <Calendar
        mode="multiple"
        selected={selectedDates}
        onSelect={setSelectedDates}
        className="rounded-md border"
        max={5}
        footer={<p className="text-center text-sm text-muted-foreground mt-4">You can select up to 5 dates.</p>}
      />
    </div>
  );
} 