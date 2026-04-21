"use client";

import { Button, kibanToast } from "@q1k-oss/kiban";

export default function SonnerBasicDemo() {
  return (
    <div className="flex flex-wrap gap-2 items-center justify-center">
      <Button variant="outline" onClick={() => kibanToast.success("Pizza ordered", { description: "Extra cheese confirmed. You've earned it, legend." })}>
        Success
      </Button>
      <Button variant="outline" onClick={() => kibanToast.error("WiFi died", { description: "Right during the final boss fight. Life is unfair." })}>
        Error
      </Button>
      <Button variant="outline" onClick={() => kibanToast.warning("Fridge is empty", { description: "Just ketchup and regret in there." })}>
        Warning
      </Button>
      <Button variant="outline" onClick={() => kibanToast.info("Cat is staring at you", { description: "It's been 14 minutes. Zero blinks. Send help." })}>
        Info
      </Button>
      <Button variant="outline" onClick={() => kibanToast.success("Saved")}>
        Title Only
      </Button>
    </div>
  );
}
