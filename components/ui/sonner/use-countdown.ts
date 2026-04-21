"use client";

import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

export const useCountdown = (
  toastId: string | number,
  duration: number,
  paused = false,
) => {
  const [remaining, setRemaining] = useState(duration);
  const remainingRef = useRef(duration);
  const startRef = useRef(Date.now());

  // Keep ref in sync without making the interval effect depend on it
  useEffect(() => {
    remainingRef.current = remaining;
  }, [remaining]);

  useEffect(() => {
    if (paused) return;

    startRef.current = Date.now();
    const startRemaining = remainingRef.current;

    const timer = setInterval(() => {
      const left = Math.max(0, startRemaining - (Date.now() - startRef.current));
      setRemaining(left);
      if (left <= 0) {
        clearInterval(timer);
        toast.dismiss(toastId);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [paused, toastId, duration]);

  return remaining / duration;
};
