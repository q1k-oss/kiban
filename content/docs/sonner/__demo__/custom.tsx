"use client";

import { Avatar, AvatarFallback, Button, Progress, kibanToast } from "@q1k-oss/kiban";
import { AppIcon } from "@q1k-oss/kiban";

export default function SonnerCustomDemo() {
  return (
    <div className="flex flex-wrap gap-2 items-center justify-center">
      <Button
        variant="outline"
        onClick={() =>
          kibanToast.custom(
            (id) => (
              <div className="w-[380px] bg-background rounded-xl border border-stroke p-4 flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>RM</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-medium text-primary-text block">
                    Mom sent you a voice note
                  </span>
                  <span className="text-xs text-tertiary-text block">
                    It's 4 minutes long. Brace yourself.
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => kibanToast.dismiss(id)}
                  className="p-1"
                >
                  <AppIcon iconName="x" size={14} />
                </Button>
              </div>
            ),
          )
        }
      >
        Social Notification
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          kibanToast.custom(
            (id) => (
              <div className="w-[380px] bg-background rounded-xl border border-stroke overflow-hidden">
                <div className="p-4 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-success/10">
                    <AppIcon iconName="package" size={20} className="text-success" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-medium text-primary-text block">
                      Your package is out for delivery
                    </span>
                    <span className="text-xs text-tertiary-text block mt-1">
                      Arriving between 2:00 PM - 4:00 PM
                    </span>
                  </div>
                </div>
                <div className="border-t border-stroke flex">
                  <button
                    onClick={() => kibanToast.dismiss(id)}
                    className="flex-1 py-2.5 text-xs text-tertiary-text hover:bg-muted/50 cursor-pointer bg-transparent border-none border-r border-stroke"
                  >
                    Dismiss
                  </button>
                  <button
                    onClick={() => {
                      kibanToast.dismiss(id);
                      kibanToast.info("Opening tracker...");
                    }}
                    className="flex-1 py-2.5 text-xs text-primary-text font-medium hover:bg-muted/50 cursor-pointer bg-transparent border-none"
                  >
                    Track Package
                  </button>
                </div>
              </div>
            ),
            { duration: 8000 },
          )
        }
      >
        Delivery Update
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          kibanToast.custom(
            (id) => (
              <div className="w-[380px] bg-background rounded-xl border border-stroke p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-full bg-warning/10">
                    <AppIcon iconName="music" size={18} className="text-warning" />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-medium text-primary-text block">
                      Now Playing
                    </span>
                    <span className="text-xs text-tertiary-text">
                      Lo-fi Beats to Code To
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => kibanToast.dismiss(id)}
                    className="p-1"
                  >
                    <AppIcon iconName="x" size={14} />
                  </Button>
                </div>
                <Progress value={65} className="h-1" />
              </div>
            ),
            { duration: 10000 },
          )
        }
      >
        Music Player
      </Button>
    </div>
  );
}
