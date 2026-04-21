"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Button,
  Switch,
  Label,
} from "@q1k-oss/kiban";

const sides = ["top", "right", "bottom", "left"] as const;
const positions = ["fixed", "absolute"] as const;

export default () => {
  const [side, setSide] = useState<(typeof sides)[number]>("right");
  const [positioning, setPositioning] =
    useState<(typeof positions)[number]>("fixed");
  const [showOverlay, setShowOverlay] = useState(true);
  const [preventOutsideClose, setPreventOutsideClose] = useState(true);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4 items-end">
        <div className="flex flex-col gap-1">
          <span className="text-xs text-muted-foreground">Side</span>
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
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs text-muted-foreground">Positioning</span>
          <div className="flex gap-1">
            {positions.map((p) => (
              <Button
                key={p}
                variant={positioning === p ? "default" : "outline"}
                size="sm"
                onClick={() => setPositioning(p)}
              >
                {p.charAt(0).toUpperCase() + p.slice(1)}
              </Button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Switch
            id="overlay"
            checked={showOverlay}
            onCheckedChange={setShowOverlay}
            className="data-[state=checked]:bg-green-600 data-[state=unchecked]:bg-red-900"
          />
          <Label htmlFor="overlay" className="text-xs">Overlay</Label>
        </div>
        <div className="flex items-center gap-2">
          <Switch
            id="prevent-close"
            checked={preventOutsideClose}
            onCheckedChange={setPreventOutsideClose}
            className="data-[state=checked]:bg-green-600 data-[state=unchecked]:bg-red-900"
          />
          <Label htmlFor="prevent-close" className="text-xs">Prevent Outside Close</Label>
        </div>
      </div>

      <div className="relative h-64 w-full rounded-md border border-dashed border-muted-foreground/30 overflow-hidden">
        <div className="flex items-center justify-center h-full text-sm text-muted-foreground">
          {positioning === "absolute"
            ? "Sheet opens inside this container"
            : "Sheet opens over the full viewport"}
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="absolute bottom-4 left-1/2 -translate-x-1/2">
              Open Sheet
            </Button>
          </SheetTrigger>
          <SheetContent
            side={side}
            positioning={positioning}
            showOverlay={showOverlay}
            preventOutsideClose={preventOutsideClose}
          >
            <SheetHeader>
              <SheetTitle>
                {side} / {positioning}
              </SheetTitle>
            </SheetHeader>
            <div className="p-4 text-sm text-muted-foreground">
              <p><strong>Side:</strong> {side}</p>
              <p><strong>Positioning:</strong> {positioning}</p>
              <p><strong>Overlay:</strong> {showOverlay ? "on" : "off"}</p>
              <p><strong>Prevent outside close:</strong> {preventOutsideClose ? "on" : "off"}</p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};
