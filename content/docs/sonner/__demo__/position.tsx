"use client";

import { useState } from "react";

import { Button, kibanToast } from "@q1k-oss/kiban";

const positions = ["top-left", "top-center", "top-right", "bottom-left", "bottom-center", "bottom-right"] as const;

type Position = (typeof positions)[number];

export default function SonnerPositionDemo() {
  const [position, setPosition] = useState<Position>("top-right");

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex flex-wrap gap-1.5 justify-center">
        {positions.map((pos) => (
          <Button key={pos} variant={position === pos ? "default" : "outline"} size="sm" onClick={() => setPosition(pos)}>
            {pos}
          </Button>
        ))}
      </div>
      <Button onClick={() => kibanToast.info("Toast position", { description: `Showing at ${position}`, position })}>
        Show Toast
      </Button>
    </div>
  );
}
