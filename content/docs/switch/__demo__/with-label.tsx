'use client'

import { useState } from 'react';

import { Switch } from 'ethereal-ui';

export default () => {
  const [notifications, setNotifications] = useState(true);
  const [newsletter, setNewsletter] = useState(false);
  
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <label 
          htmlFor="notifications" 
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Enable notifications
        </label>
        <Switch 
          id="notifications"
          checked={notifications} 
          onCheckedChange={setNotifications} 
        />
      </div>
      
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <label 
            htmlFor="newsletter" 
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Subscribe to newsletter
          </label>
          <Switch 
            id="newsletter"
            checked={newsletter} 
            onCheckedChange={setNewsletter} 
          />
        </div>
        <p className="text-xs text-muted-foreground">
          Receive weekly updates about new products and features.
        </p>
      </div>
    </div>
  );
} 