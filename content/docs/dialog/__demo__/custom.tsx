'use client'

import { AlertTriangle, CheckCircle, X } from 'lucide-react';
import { useState } from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  Button,
} from 'ethereal-ui';

export default () => {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <div className="flex gap-2">
        <Button 
          variant="outline" 
          className="border-amber-500 text-amber-600 hover:bg-amber-50"
          onClick={() => setOpen(true)}
        >
          <AlertTriangle className="mr-2 h-4 w-4 text-amber-500" />
          Open Warning Dialog
        </Button>
        
        <Button 
          variant="outline" 
          className="border-green-500 text-green-600 hover:bg-green-50"
          onClick={() => setOpen(true)}
        >
          <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
          Open Success Dialog
        </Button>
      </div>
      
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="border-t-4 border-t-amber-500 p-0 gap-0 overflow-hidden">
          <div className="bg-amber-50 p-6">
            <DialogHeader>
              <div className="flex items-center gap-2 text-amber-700">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
                <DialogTitle>Warning: Potential Data Loss</DialogTitle>
              </div>
              <DialogDescription className="text-amber-700/80 pt-2">
                You're about to perform an action that will permanently delete data.
                This action cannot be undone. Please confirm that you want to proceed.
              </DialogDescription>
            </DialogHeader>
          </div>
          
          <div className="p-6 bg-background">
            <div className="rounded-md bg-amber-100 p-4 text-sm text-amber-800">
              <p className="font-medium">Warning details:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>All associated files will be permanently deleted</li>
                <li>Team members will lose access to this data</li>
                <li>Existing links will no longer work</li>
              </ul>
            </div>
            
            <DialogFooter className="flex justify-end gap-2 pt-6">
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button 
                variant="destructive"
                onClick={() => setOpen(false)}
              >
                Yes, Delete Everything
              </Button>
            </DialogFooter>
          </div>
          
          <button
            className="absolute right-4 top-4 rounded-full h-7 w-7 flex items-center justify-center border border-amber-200 bg-white text-amber-700 transition-colors hover:bg-amber-50"
            onClick={() => setOpen(false)}
          >
            <X className="h-3.5 w-3.5" />
            <span className="sr-only">Close</span>
          </button>
        </DialogContent>
      </Dialog>
    </>
  );
} 