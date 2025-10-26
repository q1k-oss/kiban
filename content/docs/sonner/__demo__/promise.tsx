"use client"

import { toast } from 'sonner';

import { Button } from 'ethereal-ui';

export default function SonnerPromiseDemo() {
  // Simulated API calls
  const mockAPISuccess = (): Promise<{ message: string }> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ message: "Data fetched successfully!" });
      }, 2000);
    });
  };

  const mockAPIError = (): Promise<{ message: string }> => {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error("Failed to fetch data"));
      }, 2000);
    });
  };

  // Simple promise toast with strings
  const handleSimplePromise = () => {
    toast.promise(mockAPISuccess, {
      loading: 'Loading data...',
      success: 'Data loaded successfully',
      error: 'Error loading data',
    });
  };

  // Promise toast with function callbacks
  const handleCallbackPromise = () => {
    toast.promise(mockAPIError, {
      loading: 'Fetching data...',
      success: () => 'Successfully fetched data',
      error: (err) => `Error: ${err.message}`,
    });
  };

  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="flex gap-2">
        <Button
          variant="outline"
          onClick={handleSimplePromise}
        >
          Simple Promise
        </Button>
        
        <Button
          variant="outline"
          onClick={handleCallbackPromise}
        >
          Callback Promise
        </Button>
      </div>
      
      <p className="text-sm text-muted-foreground mt-4">
        Toast notifications will show loading, success, or error states based on the promise result.
      </p>
    </div>
  );
} 