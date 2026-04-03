"use client";

import { actionableToast, Button, kibanToast } from "@q1k-oss/kiban";

export default function SonnerActionableDemo() {
  return (
    <div className="flex flex-wrap gap-2 items-center justify-center">
      <Button
        variant="outline"
        onClick={() =>
          actionableToast({
            title: "Gym membership renewed",
            description: "Day 1 starts Monday. Again. For the 9th time.",
            variant: "success",
            duration: 5000,
            action: {
              label: "Cancel (honestly)",
              onClick: () => kibanToast.success("Refund processed. No shame."),
            },
          })
        }
      >
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          actionableToast({
            title: "You ate the last slice",
            description:
              "Your roommate will discover this. There will be consequences.",
            variant: "error",
            duration: 8000,
            action: {
              label: "Order replacement pizza",
              onClick: () =>
                kibanToast.success("New pizza incoming. Crisis averted."),
            },
          })
        }
      >
        Error
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          actionableToast({
            title: "Fridge is basically empty",
            description:
              "There's ketchup and questionable leftovers from Thursday.",
            variant: "warning",
            duration: 6000,
            action: {
              label: "Order groceries",
              onClick: () =>
                kibanToast.info("Cart filled with snacks only. Classic."),
            },
          })
        }
      >
        Warning
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          actionableToast({
            title: "Your plant needs water",
            description: "It's been 3 weeks. The plant has filed a complaint.",
            variant: "info",
            duration: 7000,
            action: {
              label: "Water it",
              onClick: () => kibanToast.success("Plant revived. Barely."),
            },
          })
        }
      >
        Info
      </Button>
    </div>
  );
}
