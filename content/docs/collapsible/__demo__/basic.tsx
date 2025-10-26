'use client'

import { useState } from 'react';

import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Button,
} from 'ethereal-ui';

export default () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full space-y-2"
    >
      <div className="flex items-center justify-between space-x-4">
        <h4 className="text-sm font-semibold">
          Project Settings
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            {isOpen ? "Hide" : "Show"}
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-2 text-sm">
        Manage your project preferences here
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-2 text-sm">
          <p className="font-medium">Project Name</p>
          <p className="text-muted-foreground">Update your project name and manage settings</p>
        </div>
        <div className="rounded-md border px-4 py-2 text-sm">
          <p className="font-medium">Users & Permissions</p>
          <p className="text-muted-foreground">Invite users and manage permissions</p>
        </div>
        <div className="rounded-md border px-4 py-2 text-sm">
          <p className="font-medium">Billing & Subscription</p>
          <p className="text-muted-foreground">Manage your subscription and payment methods</p>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
} 