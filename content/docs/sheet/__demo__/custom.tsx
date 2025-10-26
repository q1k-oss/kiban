'use client'

import { ShoppingCart, Trash2, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  Button,
  Separator,
} from 'ethereal-ui';

// Sample cart items
const initialItems = [
  {
    id: 1,
    name: 'Ethereal Tee',
    description: 'Black, Size M',
    price: 29.99,
    quantity: 1,
    image: 'https://via.placeholder.com/60x60',
  },
  {
    id: 2,
    name: 'Garden Hoodie',
    description: 'Green, Size L',
    price: 49.99,
    quantity: 2,
    image: 'https://via.placeholder.com/60x60',
  },
  {
    id: 3,
    name: 'Developer Mug',
    description: 'Ceramic, 350ml',
    price: 14.99,
    quantity: 1,
    image: 'https://via.placeholder.com/60x60',
  },
];

export default () => {
  const [items, setItems] = useState(initialItems);
  const [isOpen, setIsOpen] = useState(false);

  const updateQuantity = (id: number, delta: number) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(0, item.quantity + delta);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const getTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const itemCount = items.reduce((count, item) => count + item.quantity, 0);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="relative">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Cart
          {itemCount > 0 && (
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
              {itemCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
          <SheetDescription>
            {itemCount === 0 
              ? "Your cart is empty" 
              : `You have ${itemCount} ${itemCount === 1 ? 'item' : 'items'} in your cart`}
          </SheetDescription>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center space-y-2">
              <ShoppingCart className="h-12 w-12 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">No items in cart</p>
              <Button variant="outline" size="sm" onClick={() => setIsOpen(false)}>
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-start space-x-4">
                  <div className="h-16 w-16 overflow-hidden rounded-md bg-muted">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <h4 className="text-sm font-medium">{item.name}</h4>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="rounded-md p-1 hover:bg-muted"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="rounded-md p-1 hover:bg-muted"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <span className="text-sm font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="rounded-md p-1 text-red-500 hover:bg-muted"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {items.length > 0 && (
          <>
            <Separator />
            <div className="space-y-2 py-4">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Subtotal</span>
                <span className="text-sm font-medium">${getTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Shipping</span>
                <span className="text-sm font-medium">$5.00</span>
              </div>
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>${(getTotal() + 5).toFixed(2)}</span>
              </div>
            </div>
            <SheetFooter>
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Continue Shopping
              </Button>
              <Button>Checkout</Button>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
} 