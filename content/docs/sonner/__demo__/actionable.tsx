"use client";

import { toast } from "sonner";

import { Button, actionableToast } from "@q1k-oss/kiban";

export default function SonnerActionableDemo() {
  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="flex gap-2">
        <Button
          variant="outline"
          onClick={() =>
            actionableToast({
              title: "Changes saved",
              description: "Task has been updated with the recent changes.",
              variant: "success",
              duration: 5000,
              action: {
                label: "Undo",
                onClick: () => toast("Changes reverted!"),
              },
            })
          }
        >
          Success Actionable
        </Button>

        <Button
          variant="outline"
          onClick={() =>
            actionableToast({
              title: "Item deleted",
              description: "The selected item has been permanently removed.",
              variant: "error",
              duration: 8000,
              action: {
                label: "Undo",
                onClick: () => toast("Item restored!"),
              },
            })
          }
        >
          Error Actionable
        </Button>
      </div>

      <div className="flex gap-2 mt-2">
        <Button
          variant="outline"
          onClick={() =>
            actionableToast({
              title: "Storage running low",
              description: "You have used 90% of your available storage.",
              variant: "warning",
              duration: 6000,
              action: {
                label: "Manage storage",
                onClick: () => toast("Opening storage settings..."),
              },
            })
          }
        >
          Warning Actionable
        </Button>

        <Button
          variant="outline"
          onClick={() =>
            actionableToast({
              title: "New version available",
              description: "Version 2.0 is ready to install.",
              variant: "info",
              duration: 7000,
              action: {
                label: "Update now",
                onClick: () => toast("Updating..."),
              },
            })
          }
        >
          Info Actionable
        </Button>
      </div>
    </div>
  );
}
