'use client'

import { ChevronDown, Settings, Users, CreditCard } from 'lucide-react';
import { useState } from 'react';

import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from 'ethereal-ui';

export default () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full space-y-2"
    >
      <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md border px-4 py-3 font-medium">
        <div className="flex items-center gap-2">
          <Settings className="h-4 w-4" />
          <span>Advanced Settings</span>
        </div>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-2 rounded-md border px-4 py-2 data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up">
        <div className="flex items-center gap-2 py-2 border-b">
          <Users className="h-4 w-4 text-muted-foreground" />
          <div>
            <p className="font-medium">User Management</p>
            <p className="text-sm text-muted-foreground">Configure user roles and permissions</p>
          </div>
        </div>
        <div className="flex items-center gap-2 py-2">
          <CreditCard className="h-4 w-4 text-muted-foreground" />
          <div>
            <p className="font-medium">Payment Methods</p>
            <p className="text-sm text-muted-foreground">Manage your payment methods and billing history</p>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
} 