"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  Button,
  Separator,
} from "@q1k-oss/kiban";

const notifications = [
  { id: 1, title: "New comment on your post", time: "2 min ago", read: false },
  { id: 2, title: "Your deploy succeeded", time: "1 hour ago", read: false },
  { id: 3, title: "Team meeting in 30 min", time: "3 hours ago", read: true },
  { id: 4, title: "PR #42 was merged", time: "Yesterday", read: true },
];

export default () => {
  const [items, setItems] = useState(notifications);
  const unread = items.filter((n) => !n.read).length;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="relative">
          Notifications
          {unread > 0 && (
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
              {unread}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-sm">
        <SheetHeader>
          <SheetTitle>Notifications</SheetTitle>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => setItems(items.map((n) => ({ ...n, read: true })))}
          >
            Mark all read
          </Button>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto">
          {items.map((n, i) => (
            <div key={n.id}>
              <div
                className="flex items-start gap-3 p-4 cursor-pointer hover:bg-muted/50 transition-colors"
                onClick={() =>
                  setItems(items.map((item) => (item.id === n.id ? { ...item, read: true } : item)))
                }
              >
                <div
                  className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${n.read ? "bg-transparent" : "bg-blue-500"}`}
                />
                <div className="flex-1 space-y-1">
                  <p className={`text-sm ${n.read ? "text-muted-foreground" : "font-medium"}`}>
                    {n.title}
                  </p>
                  <p className="text-xs text-muted-foreground">{n.time}</p>
                </div>
              </div>
              {i < items.length - 1 && <Separator />}
            </div>
          ))}
        </div>
        <SheetFooter className="p-4">
          <Button variant="outline" className="w-full">
            View All Notifications
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
