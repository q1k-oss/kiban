'use client'

import { useState, useEffect } from 'react';

import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
  Button,
} from 'ethereal-ui';

export default function DrawerResponsiveDemo() {
  const [isMobile, setIsMobile] = useState(false);

  // Update the isMobile state based on window width
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIsMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIsMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // The content to display in both the drawer and dialog
  const SharedContent = () => (
    <>
      <div className="p-4 space-y-4">
        <p className="text-sm text-muted-foreground">
          This component uses a Drawer on mobile devices and a Dialog on desktop.
          Try resizing your browser window to see the different components.
        </p>
        <div className="grid grid-cols-2 gap-2">
          <div className="p-4 bg-muted rounded-md">
            <p className="text-xs font-medium">Device Type</p>
            <p className="text-lg font-bold">
              {isMobile ? 'Mobile' : 'Desktop'}
            </p>
          </div>
          <div className="p-4 bg-muted rounded-md">
            <p className="text-xs font-medium">Component Used</p>
            <p className="text-lg font-bold">
              {isMobile ? 'Drawer' : 'Dialog'}
            </p>
          </div>
        </div>
      </div>
    </>
  );

  // On mobile: render a drawer
  if (isMobile) {
    return (
      <Drawer>
        <DrawerTrigger asChild>
          <Button>Open Component</Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-md">
            <DrawerHeader>
              <DrawerTitle>Responsive Component</DrawerTitle>
              <DrawerDescription>
                This is a Drawer component on mobile screens.
              </DrawerDescription>
            </DrawerHeader>
            <SharedContent />
            <DrawerFooter>
              <DrawerClose asChild>
                <Button>Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  // On desktop: render a dialog
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Component</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Responsive Component</DialogTitle>
          <DialogDescription>
            This is a Dialog component on desktop screens.
          </DialogDescription>
        </DialogHeader>
        <SharedContent />
        <DialogFooter>
          <DialogClose asChild>
            <Button>Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
} 