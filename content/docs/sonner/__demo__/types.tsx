"use client"

import { CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@happect/ethereal-ui';

export default function SonnerTypesDemo() {
  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="flex gap-2">
        <Button
        variant='outline'
          className="border-success text-success hover:bg-success"
          onClick={() => 
            toast.success('Success notification', {
              description: 'Your action has been completed successfully.',
              
            })
          }
        >
          <CheckCircle className="h-4 w-4 mr-2" />
          Success
        </Button>
        
        <Button
          variant="outline"
          className="border-error-border-2 text-error-border-2 hover:bg-error-border-2"
          onClick={() => 
            toast.error('Error notification', {
              description: 'There was a problem with your request.'
            })
          }
        >
          <AlertCircle className="h-4 w-4 mr-2" />
          Error
        </Button>
      </div>
      
      <div className="flex gap-2 mt-2">
        <Button
          variant="outline"
          className="border-toast-information text-toast-information hover:bg-toast-information"
          onClick={() => 
            toast.info('Information notification', {
              description: 'Here is some information you might find useful.'
            })
          }
        >
          <Info className="h-4 w-4 mr-2" />
          Info
        </Button>
        
        <Button
          variant="outline"
          className="border-status-text-paused text-status-text-paused hover:bg-status-text-paused"
          onClick={() => 
            toast.warning('Warning notification', {
              description: 'Please be aware of this important warning.'
            })
          }
        >
          <AlertTriangle className="h-4 w-4 mr-2" />
          Warning
        </Button>
      </div>
      
      <div className="flex gap-2 mt-2">
        <Button
          variant="outline"
          onClick={() => 
            toast.loading('Loading...', {
              description: 'Please wait while we process your request.'
            })
          }
        >
          Loading
        </Button>
      </div>
    </div>
  );
} 