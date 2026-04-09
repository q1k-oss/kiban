"use client";

import { Button, kibanToast } from "@q1k-oss/kiban";

const orderFood = () =>
  new Promise<{ item: string }>((resolve) =>
    setTimeout(() => resolve({ item: "Butter Chicken" }), 2500),
  );

const findRemote = () =>
  new Promise<never>((_, reject) =>
    setTimeout(() => reject(new Error("Under the couch cushion")), 2000),
  );

export default function SonnerPromiseDemo() {
  return (
    <div className="flex flex-wrap gap-2 items-center justify-center">
      <Button
        variant="outline"
        onClick={() =>
          kibanToast.loading("Microwaving leftovers...", {
            description: "Spinning plate of mystery food. Pray it heats evenly.",
          })
        }
      >
        Loading
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          kibanToast.promise(orderFood(), {
            loading: "Placing your order...",
            success: (data) => `${data.item} is on its way!`,
            error: "Kitchen caught fire. Again.",
            description: {
              loading: "Convincing the chef you deserve extra naan...",
              success: "ETA: 30 mins. Patience level: critical.",
            },
          })
        }
      >
        Promise (Success)
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          kibanToast.promise(findRemote(), {
            loading: "Searching for TV remote...",
            success: "Remote found!",
            error: (err) => `Found it: ${(err as Error).message}`,
            description: {
              loading: "Checking between cushions...",
              error: "It was there the whole time. Classic.",
            },
          })
        }
      >
        Promise (Error)
      </Button>
    </div>
  );
}
