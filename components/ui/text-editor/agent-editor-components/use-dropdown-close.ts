"use client";
import { RefObject, useEffect } from "react";

/**
 * Closes a toolbar dropdown when the user clicks outside it or presses Escape.
 * Works for any popover where the trigger button + popover share the same wrapper element.
 */
export const useDropdownClose = (
  ref: RefObject<HTMLElement | null>,
  isOpen: boolean,
  onClose: () => void,
) => {
  useEffect(() => {
    if (!isOpen) return;
    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const node = ref.current;
      if (!node) return;
      if (event.target instanceof Node && node.contains(event.target)) return;
      onClose();
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        onClose();
      }
    };
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [ref, isOpen, onClose]);
};
