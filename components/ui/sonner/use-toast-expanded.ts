"use client";

import { useEffect, useState, type RefObject } from "react";

export const useToastExpanded = (ref: RefObject<HTMLElement | null>) => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const item = ref.current?.closest("[data-sonner-toast]");
    if (!item) return;

    const sync = () =>
      setExpanded(item.getAttribute("data-expanded") === "true");

    sync();
    const observer = new MutationObserver(sync);
    observer.observe(item, {
      attributes: true,
      attributeFilter: ["data-expanded"],
    });

    return () => observer.disconnect();
  }, [ref]);

  return expanded;
};
