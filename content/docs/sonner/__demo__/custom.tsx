"use client";

import { AppIcon, Avatar, AvatarFallback, Button, Progress, kibanToast } from "@q1k-oss/kiban";

export default function SonnerCustomDemo() {
  return (
    <div className="flex flex-wrap gap-2 items-center justify-center">
      <Button
        variant="outline"
        onClick={() =>
          kibanToast.success("Nap completed", {
            description: "3 hours well spent. You're basically reborn.",
            colors: {
              iconColor: "#a855f7",
              borderGradient: "linear-gradient(to right, #1a0a2e, #2d1150)",
              progressColor: "linear-gradient(to right, transparent, #a855f7)",
              bgColor: "linear-gradient(to right, #0f0520, #151515 30%)",
            },
          })
        }
      >
        Custom Colors
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          kibanToast.custom(
            (id) => (
              <div className="w-[400px] bg-background rounded-xl border border-stroke overflow-hidden">
                <div className="p-4 flex items-center gap-3">
                  <AppIcon iconName="custom-google-drive-icon" source="custom" size={28} />
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-medium text-primary-text block">Memes backed up</span>
                    <span className="text-xs text-tertiary-text block">847 files synced to /important-stuff</span>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => kibanToast.dismiss(id)} className="p-1">
                    <AppIcon iconName="x" size={14} />
                  </Button>
                </div>
              </div>
            ),
          )
        }
      >
        Drive Sync
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          kibanToast.custom(
            (id) => (
              <div className="w-[400px] bg-background rounded-xl border border-stroke overflow-hidden">
                <div className="p-4 flex items-start gap-3">
                  <AppIcon iconName="custom-file-pdf-icon" source="custom" size={32} />
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-medium text-primary-text block">Shopping list ready</span>
                    <span className="text-xs text-tertiary-text block mt-0.5">snacks_only.pdf — 2.4MB</span>
                  </div>
                </div>
                <div className="border-t border-stroke flex">
                  <button
                    onClick={() => kibanToast.dismiss(id)}
                    className="flex-1 py-2.5 text-xs text-tertiary-text hover:bg-muted/50 cursor-pointer bg-transparent border-none"
                  >
                    Dismiss
                  </button>
                  <button
                    onClick={() => { kibanToast.dismiss(id); kibanToast.success("Downloading..."); }}
                    className="flex-1 py-2.5 text-xs text-primary-text font-medium hover:bg-muted/50 cursor-pointer bg-transparent border-none border-l border-stroke"
                  >
                    Download
                  </button>
                </div>
              </div>
            ),
            { duration: 8000 },
          )
        }
      >
        PDF Download
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          kibanToast.custom(
            (id) => (
              <div className="w-[380px] bg-background rounded-xl border border-stroke p-4">
                <div className="flex items-center gap-3 mb-3">
                  <AppIcon iconName="custom-full-preview-play" source="custom" size={24} className="text-primary shrink-0" />
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-medium text-primary-text block truncate">Procrastination Playlist</span>
                    <span className="text-xs text-tertiary-text block truncate">Same 5 songs on repeat since 2019</span>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => kibanToast.dismiss(id)} className="p-1">
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
      <Button
        variant="outline"
        onClick={() =>
          kibanToast.success("Snack haul complete", {
            description: "chips.bag, chocolate.bar, ice-cream.tub — All essentials secured.",
            className: "w-[520px]",
            duration: 6000,
          })
        }
      >
        Wide Toast
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          kibanToast.warning("Nap overdue", {
            className: "w-[260px]",
            duration: 4000,
          })
        }
      >
        Compact Toast
      </Button>
    </div>
  );
}
