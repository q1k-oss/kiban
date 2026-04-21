import type { KibanToastPosition } from "./kiban-toast";

interface TrackedToast {
  id: string | number;
  position: KibanToastPosition;
}

let trackedToasts: TrackedToast[] = [];
let storeListeners: Array<() => void> = [];

const notifyStore = () => storeListeners.forEach((l) => l());

export const toastStore = {
  track: (id: string | number, position: KibanToastPosition) => {
    trackedToasts = [...trackedToasts, { id, position }];
    notifyStore();
  },

  untrack: (id: string | number) => {
    trackedToasts = trackedToasts.filter((t) => t.id !== id);
    notifyStore();
  },

  untrackByPosition: (position: KibanToastPosition) => {
    const ids = trackedToasts.filter((t) => t.position === position).map((t) => t.id);
    trackedToasts = trackedToasts.filter((t) => t.position !== position);
    notifyStore();
    return ids;
  },

  getGrouped: (): Record<KibanToastPosition, TrackedToast[]> => {
    return trackedToasts.reduce<Record<string, TrackedToast[]>>((acc, t) => {
      (acc[t.position] ??= []).push(t);
      return acc;
    }, {});
  },

  subscribe: (listener: () => void) => {
    storeListeners.push(listener);
    return () => {
      storeListeners = storeListeners.filter((l) => l !== listener);
    };
  },

  getSnapshot: () => trackedToasts,
};
