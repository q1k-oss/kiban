import { Check, X, AlertCircle, Bell } from 'lucide-react';

import { Badge } from 'ethereal-ui';

export default () => (
  <div className="flex flex-col gap-4">
    <div className="flex flex-wrap gap-2">
      <Badge className="gap-1">
        <Check className="h-3.5 w-3.5" />
        <span>Approved</span>
      </Badge>
      <Badge variant="secondary" className="gap-1">
        <AlertCircle className="h-3.5 w-3.5" />
        <span>Warning</span>
      </Badge>
      <Badge variant="destructive" className="gap-1">
        <X className="h-3.5 w-3.5" />
        <span>Rejected</span>
      </Badge>
      <Badge variant="outline" className="gap-1">
        <Bell className="h-3.5 w-3.5" />
        <span>Notifications</span>
      </Badge>
    </div>
    
    <div className="flex flex-wrap gap-2">
      <Badge>New</Badge>
      <Badge variant="secondary">
        <span>Messages</span>
        <span className="ml-1 rounded-full bg-primary px-1.5 text-xs text-primary-foreground">4</span>
      </Badge>
      <Badge variant="destructive">
        <span>Errors</span>
        <span className="ml-1 rounded-full bg-red-100 px-1.5 text-xs text-destructive">7</span>
      </Badge>
      <Badge variant="outline">
        <span>Updates</span>
        <span className="ml-1 rounded-full bg-muted px-1.5 text-xs">12</span>
      </Badge>
    </div>
  </div>
) 