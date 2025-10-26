'use client'

import { useState } from 'react';

import { Switch } from 'ethereal-ui';

export default () => {
  const [checked, setChecked] = useState(false);
  
  return (
    <div className="flex items-center space-x-2">
      <Switch 
        checked={checked} 
        onCheckedChange={setChecked} 
      />
      <p className="text-sm text-muted-foreground">
        Switch is {checked ? 'on' : 'off'}
      </p>
    </div>
  );
} 