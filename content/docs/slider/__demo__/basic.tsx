'use client'

import { useState } from 'react';

import { Slider } from '@q1k-oss/kiban';

export default () => {
  const [value, setValue] = useState([50]);
  
  return (
    <div className="space-y-6">
      <div>
        <Slider
          defaultValue={[50]}
          max={100}
          step={1}
          value={value}
          onValueChange={setValue}
        />
      </div>
      <div className="text-center text-sm text-muted-foreground">
        Value: {value}
      </div>
    </div>
  );
} 