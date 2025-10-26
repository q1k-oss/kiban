import { Info, AlertCircle, CheckCircle, Bell } from 'lucide-react';

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from 'ethereal-ui';

export default () => (
  <div className="space-y-4">
    <Alert>
      <Info className="h-4 w-4" />
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>
        This alert includes an information icon for additional context.
      </AlertDescription>
    </Alert>
    
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>
        This destructive alert has an alert circle icon to emphasize the message.
      </AlertDescription>
    </Alert>
    
    <Alert className="border-green-500/30 bg-green-500/10">
      <CheckCircle className="h-4 w-4 text-green-700" />
      <AlertTitle className="text-green-700">Success</AlertTitle>
      <AlertDescription className="text-green-700">
        Your changes have been saved successfully.
      </AlertDescription>
    </Alert>
    
    <Alert className="border-amber-500/30 bg-amber-500/10">
      <Bell className="h-4 w-4 text-amber-700" />
      <AlertTitle className="text-amber-700">Notification</AlertTitle>
      <AlertDescription className="text-amber-700">
        You have 3 new messages in your inbox.
      </AlertDescription>
    </Alert>
  </div>
) 