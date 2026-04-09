"use client";

import { Button, kibanActionableToast, kibanToast } from "@q1k-oss/kiban";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function SonnerActionableDemo() {
  return (
    <div className="flex flex-wrap gap-2 items-center justify-center">
      <Button
        variant="outline"
        onClick={() =>
          kibanActionableToast({
            title: "Eat the last cookie?",
            description: "Your roommate counted them. Twice.",
            variant: "error",
            duration: 10000,
            actions: [
              {
                label: "Eat it",
                icon: "cookie",
                onClick: async () => {
                  await wait(1500);
                  kibanToast.success("Cookie consumed. No witnesses.");
                },
              },
              {
                label: "Resist",
                icon: "x",
                onClick: () => {},
              },
            ],
          })
        }
      >
        Confirm / Cancel
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          kibanActionableToast({
            title: "Reply to mom's text?",
            description: "It's been 3 hours. She sent a follow-up dot dot dot.",
            variant: "warning",
            duration: 10000,
            action: {
              label: "Reply 'On my way'",
              icon: "send",
              onClick: async () => {
                await wait(2000);
                kibanToast.success("Lie sent successfully.");
              },
            },
          })
        }
      >
        Single Action
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          kibanActionableToast({
            title: "Gym membership expiring",
            description: "You went once. In January. For the free towel.",
            variant: "success",
          })
        }
      >
        Default (Yes / No)
      </Button>
    </div>
  );
}
