"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Button,
} from "@q1k-oss/kiban";

const sides = ["top", "right", "bottom", "left"] as const;

export default () => {
  const [side, setSide] = useState<(typeof sides)[number]>("right");

  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex gap-1">
        {sides.map((s) => (
          <Button
            key={s}
            variant={side === s ? "default" : "outline"}
            size="sm"
            onClick={() => setSide(s)}
          >
            {s.charAt(0).toUpperCase() + s.slice(1)}
          </Button>
        ))}
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button>Open from {side}</Button>
        </SheetTrigger>
        <SheetContent side={side}>
          <SheetHeader>
            <SheetTitle>Sheet — {side}</SheetTitle>
            <SheetDescription>
              This sheet slides in from the {side}.
            </SheetDescription>
          </SheetHeader>
          <div className="p-4 text-sm text-muted-foreground">
            Use the <code className="text-foreground">side</code> prop to control which edge the sheet appears from.
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
