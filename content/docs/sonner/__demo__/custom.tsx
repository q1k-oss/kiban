"use client"

import { ThumbsUp, Bell, ShoppingCart, ArrowRight, X } from 'lucide-react';
import { toast } from 'sonner';

import { Button, Avatar, AvatarImage, AvatarFallback } from 'ethereal-ui';

export default function SonnerCustomDemo() {
  const showCustomToast = () => {
    toast.custom(() => (
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex">
        <div className="flex-1 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">John Doe</p>
              <p className="mt-1 text-sm text-gray-500">
                Liked your recent post: "Building a toast component with Sonner"
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss()}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none"
          >
            <ThumbsUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    ));
  };  

  const showNotificationToast = () => {
    toast.custom(() => (
      <div className="max-w-md w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg rounded-lg pointer-events-auto flex">
        <div className="flex-1 p-4 flex items-center">
          <Bell className="h-6 w-6 mr-3" />
          <div>
            <p className="font-medium">New Notification</p>
            <p className="text-sm opacity-80">
              You have 3 unread messages in your inbox
            </p>
          </div>
        </div>
        <div className="flex items-center pr-2">
          <button
            onClick={() => toast.dismiss()}
            className="p-1.5 rounded-full bg-white/20 text-white hover:bg-white/30 focus:outline-none"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    ));
  };

  const showCartToast = () => {
    toast.custom(() => (
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex overflow-hidden">
        <div className="flex-1 p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <ShoppingCart className="h-6 w-6 text-green-500" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                Item added to cart
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Your item has been added to the cart successfully.
              </p>
            </div>
          </div>
        </div>
        <div className="border-l border-gray-200 flex flex-col justify-center px-4">
          <button
            onClick={() => {
              toast.dismiss();
              // Simulate navigation to cart
              toast('Navigating to cart...');
            }}
            className="text-indigo-600 hover:text-indigo-500 flex items-center text-sm font-medium"
          >
            View Cart
            <ArrowRight className="ml-1 h-4 w-4" />
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="flex gap-2">
        <Button
          variant="outline"
          onClick={showCustomToast}
        >
          Social Notification
        </Button>
        
        <Button
          variant="outline"
          onClick={showNotificationToast}
        >
          Styled Notification
        </Button>
        
        <Button
          variant="outline"
          onClick={showCartToast}
        >
          Cart Notification
        </Button>
      </div>
    </div>
  );
} 