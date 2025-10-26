'use client'

import { useState, useEffect } from 'react';

import { Progress } from 'ethereal-ui';

export default () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prevProgress + 5;
      });
    }, 500);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>Uploading file...</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <Progress value={progress} className="w-full" />
      {progress === 100 && (
        <div className="text-sm text-green-500">Upload complete!</div>
      )}
    </div>
  );
} 