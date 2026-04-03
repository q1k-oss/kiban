"use client";

import { Button, kibanToast } from "@q1k-oss/kiban";


const mockCooking = () =>
  new Promise<{ dish: string }>((resolve) =>
    setTimeout(() => resolve({ dish: "Instant Noodles" }), 2500),
  );

const mockAlarm = () =>
  new Promise<never>((_, reject) =>
    setTimeout(() => reject(new Error("Snoozed 7 times")), 2000),
  );

export default function SonnerPromiseDemo() {
  return (
    <div className="flex flex-wrap gap-2 items-center justify-center">
      <Button
        variant="outline"
        onClick={() =>
          kibanToast.loading("Microwave heating leftovers...", {
            description: "Spinning plate of mystery food. Pray it heats evenly.",
          })
        }
      >
        Loading
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          kibanToast.promise(mockCooking(), {
            loading: "Cooking dinner...",
            success: (data) => `${data.dish} ready. Chef's kiss.`,
            error: "Kitchen is on fire. Again.",
            description: {
              loading: "Boiling water... this is your peak skill.",
              success: "Gordon Ramsay would be... disappointed but not surprised.",
              error: "Maybe just order takeout.",
            },
          })
        }
      >
        Promise (Success)
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          kibanToast.promise(mockAlarm(), {
            loading: "Waking up...",
            success: "Actually woke up on time",
            error: (err) => `${(err as Error).message}. You're late. Very late.`,
            description: {
              loading: "Alarm is doing its best...",
              error: "Your boss already noticed. Good luck.",
            },
          })
        }
      >
        Promise (Error)
      </Button>
    </div>
  );
}
