'use client'

import { useState } from 'react';

import { Slider } from 'ethereal-ui';

export default () => {
  const [value, setValue] = useState([25]);
  
  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium mb-2">Step Size: 5</h4>
          <Slider
            defaultValue={[25]}
            max={100}
            step={5}
            value={value}
            onValueChange={setValue}
          />
        </div>
        <div className="text-center text-sm text-muted-foreground">
          Value: {value}
        </div>
      </div>
      
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium mb-2">Step Size: 10</h4>
          <Slider
            defaultValue={[30]}
            max={100}
            step={10}
          />
        </div>
        <div className="grid grid-cols-11 text-xs text-muted-foreground px-1">
          <div className="text-center">0</div>
          <div className="text-center">10</div>
          <div className="text-center">20</div>
          <div className="text-center">30</div>
          <div className="text-center">40</div>
          <div className="text-center">50</div>
          <div className="text-center">60</div>
          <div className="text-center">70</div>
          <div className="text-center">80</div>
          <div className="text-center">90</div>
          <div className="text-center">100</div>
        </div>
      </div>
      
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium mb-2">Step Size: 20 (min: 20, max: 80)</h4>
          <Slider
            defaultValue={[40]}
            min={20}
            max={80}
            step={20}
          />
        </div>
        <div className="flex justify-between text-xs text-muted-foreground px-1">
          <div>20</div>
          <div>40</div>
          <div>60</div>
          <div>80</div>
        </div>
      </div>
    </div>
  );
} 