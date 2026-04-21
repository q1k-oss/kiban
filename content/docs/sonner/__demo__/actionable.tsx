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
      <Button
        variant="outline"
        onClick={() =>
          kibanActionableToast({
            title: "Your grandma sent you a 47-page WhatsApp message about her garden",
            description: "She wants you to read every word, reply with emojis, and also come over this Sunday to see the tomatoes in person. She attached 23 photos of the same plant from slightly different angles.",
            variant: "info",
            duration: 15000,
            actions: [
              {
                label: "Reply later",
                icon: "clock",
                onClick: async () => {
                  await wait(1000);
                  kibanToast.warning("You'll forget. You always do.");
                },
              },
              {
                label: "Call her",
                icon: "phone",
                onClick: async () => {
                  await wait(2000);
                  kibanToast.success("She's thrilled. You're stuck for 2 hours now.");
                },
              },
            ],
          })
        }
      >
        Long Content
      </Button>
    </div>
  );
}
