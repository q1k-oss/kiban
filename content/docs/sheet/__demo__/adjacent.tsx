"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetAdjacent,
  Button,
} from "@q1k-oss/kiban";

const items = [
  { id: 1, title: "ecommerce.com", status: "Fetched", description: "Return policy and logistics documentation scraped from the website." },
  { id: 2, title: "docs.api.com", status: "Pending", description: "API reference and integration guides." },
  { id: 3, title: "blog.startup.io", status: "Fetched", description: "Blog posts and marketing content." },
];

export default () => {
  const [selected, setSelected] = useState<number | null>(null);
  const selectedItem = items.find((i) => i.id === selected);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Open Sources</Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Indexed Websites</SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-auto p-4 space-y-3">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelected(selected === item.id ? null : item.id)}
              className={`flex items-center justify-between p-3 rounded-md border cursor-pointer transition-colors ${
                selected === item.id
                  ? "border-primary bg-primary/5"
                  : "border-stroke hover:bg-muted/50"
              }`}
            >
              <div>
                <p className="text-sm font-medium">{item.title}</p>
                <p className="text-xs text-muted-foreground">{item.status}</p>
              </div>
            </div>
          ))}
        </div>

        <SheetAdjacent
          open={selected !== null}
          side="left"
          title={selectedItem?.title}
          onClose={() => setSelected(null)}
        >
          <div className="p-4 text-sm text-muted-foreground">
            {selectedItem?.description}
          </div>
        </SheetAdjacent>
      </SheetContent>
    </Sheet>
  );
};

