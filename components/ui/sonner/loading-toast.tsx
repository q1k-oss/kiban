"use client";

import * as React from "react";
import { toast } from "sonner";

import { AppIcon } from "../app-icon";
import { Button } from "../button";

export const KibanLoadingContent = ({
  id,
  title,
  description,
}: {
  id: string | number;
  title: string;
  description?: string;
}) => (
  <div className="relative overflow-hidden rounded-xl shadow-lg">
    <div className="border-1 border-button-border-disabled rounded-xl overflow-hidden">
      <div className="relative bg-background w-[420px] p-4 flex items-start gap-3">
        <div className="p-1.5 flex items-center justify-center shrink-0">
          <AppIcon
            iconName="loader"
            size={18}
            strokeWidth={2}
            className="animate-spin text-muted-foreground"
          />
        </div>
        <div className="flex-1 min-w-0 pt-0.5 flex flex-col gap-1">
          <span className="font-medium text-primary-text text-sm leading-tight block">
            {title}
          </span>
          {description && (
            <span className="text-tertiary-text text-xs block">
              {description}
            </span>
          )}
        </div>
        <Button
          variant={"ghost"}
          onClick={() => toast.dismiss(id)}
          className="bg-transparent border-none text-tertiary-text cursor-pointer p-1 shrink-0  rounded-md"
        >
          <AppIcon iconName="x" size={14} strokeWidth={2} />
        </Button>
      </div>
    </div>
  </div>
);
