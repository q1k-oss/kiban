"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Button,
} from "@q1k-oss/kiban";

export default () => {
  const [items, setItems] = useState(["Welcome email", "Follow-up reminder"]);

  return (
    <div className="relative h-[300px] overflow-hidden">
      <Sheet behavior="panel">
        <SheetTrigger asChild>
          <Button variant="outline">Manage Templates</Button>
        </SheetTrigger>
        <SheetContent positioning="absolute">
          <SheetHeader>
            <SheetTitle>Templates</SheetTitle>
            <Button
              size="sm"
              variant="outline"
              onClick={() =>
                setItems([...items, `Template ${items.length + 1}`])
              }
            >
              + Add New
            </Button>
          </SheetHeader>
          <div className="p-4 space-y-2">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-md border px-3 py-2 text-sm"
              >
                <span>{item}</span>
                <button
                  className="text-muted-foreground hover:text-foreground text-xs"
                  onClick={() => setItems(items.filter((_, idx) => idx !== i))}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
