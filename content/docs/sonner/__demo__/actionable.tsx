"use client";

import { kibanActionableToast, Button, kibanToast } from "@q1k-oss/kiban";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function SonnerActionableDemo() {
  return (
    <div className="flex flex-wrap gap-2 items-center justify-center">
      <Button
        variant="outline"
        onClick={() =>
          kibanActionableToast({
            title: "Update available",
            description: "A new version is ready. Restart to apply changes.",
            variant: "success",
          })
        }
      >
        Default
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          kibanActionableToast({
            title: "Accept cookies?",
            description: "We use cookies to improve your experience. Mostly to track your snack habits.",
            variant: "info",
            duration: 10000,
            actions: [
              {
                label: "Accept",
                icon: "check",
                onClick: async () => {
                  await wait(1500);
                  kibanToast.success("Cookies accepted. Nom nom.");
                },
              },
              {
                label: "Decline",
                icon: "x",
                variant: "ghost",
                onClick: async () => {
                  await wait(800);
                  kibanToast.info("Fine. No cookies for you.");
                },
              },
            ],
          })
        }
      >
        Accept / Decline
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          kibanActionableToast({
            title: "Delete your search history?",
            description: "This action cannot be undone. Your secrets will be safe.",
            variant: "error",
            duration: 10000,
            actions: [
              {
                label: "Delete",
                icon: "trash-2",
                onClick: async () => {
                  await wait(2000);
                  kibanToast.success("History deleted. You're a ghost now.");
                },
              },
              {
                label: "Keep",
                icon: "shield",
                variant: "ghost",
                onClick: async () => {
                  await wait(500);
                  kibanToast.warning("Brave choice. Very brave.");
                },
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
            title: "Your cat wants attention",
            description: "It's been meowing for 20 minutes. The neighbors are concerned.",
            variant: "warning",
            duration: 10000,
            action: {
              label: "Pet the cat",
              icon: "heart",
              onClick: async () => {
                await wait(1500);
                kibanToast.success("Cat purring. World peace achieved.");
              },
            },
          })
        }
      >
        Single Action
      </Button>
    </div>
  );
}
