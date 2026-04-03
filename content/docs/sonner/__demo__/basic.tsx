"use client";

import { Button, kibanToast } from "@q1k-oss/kiban";


export default function SonnerBasicDemo() {
  return (
    <div className="flex flex-wrap gap-2 items-center justify-center">
      <Button
        variant="outline"
        onClick={() =>
          kibanToast.success("Pizza ordered successfully", {
            description: "Extra cheese confirmed. You deserve this.",
          })
        }
      >
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          kibanToast.error("WiFi disconnected during movie", {
            description: "Right at the plot twist. The universe hates you.",
          })
        }
      >
        Error
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          kibanToast.warning("Phone battery at 3%", {
            description: "Charger is in the other room. Survival mode activated.",
          })
        }
      >
        Warning
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          kibanToast.info("Your cat is judging you", {
            description: "It's been staring for 11 minutes. No blinks.",
          })
        }
      >
        Info
      </Button>
    </div>
  );
}
