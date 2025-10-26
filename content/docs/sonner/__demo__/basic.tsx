"use client"
import { toast } from 'sonner';

import { Button } from 'ethereal-ui';

export default function SonnerBasicDemo() {
  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="flex gap-2">
        <Button
          variant="outline"
          onClick={() => toast('Default notification')}
        >
          Show Toast
        </Button>
        
        <Button
          variant="outline"
          onClick={() => 
            toast('Notification with description', {
              description: 'This is additional information to provide more context.'
            })
          }
        >
          With Description
        </Button>
      </div>
      
      <div className="flex gap-2 mt-2">
        <Button
          variant="outline"
          onClick={() => 
            toast('Notification with action', {
              action: {
                label: 'Undo',
                onClick: () => console.log('Undo action clicked')
              }
            })
          }
        >
          With Action
        </Button>
        
        <Button
          variant="outline"
          onClick={() => 
            toast('Custom duration', {
              duration: 5000,
              description: 'This toast will dismiss after 5 seconds.'
            })
          }
        >
          Custom Duration
        </Button>
      </div>
    </div>
  );
} 