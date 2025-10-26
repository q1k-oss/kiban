'use client'

import { useState } from 'react';

import { Slider } from 'ethereal-ui';

export default () => {
  const [range, setRange] = useState([25, 75]);
  
  return (
    <div className="space-y-6">
      <div>
        <Slider
          defaultValue={[25, 75]}
          max={100}
          step={1}
          value={range}
          onValueChange={setRange}
        />
      </div>
      <div className="text-center text-sm text-muted-foreground">
        Range: {range[0]} - {range[1]}
      </div>
    </div>
  );
} 