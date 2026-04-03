import type { KibanToastPosition } from "./kiban-toast";
interface TrackedToast {
    id: string | number;
    position: KibanToastPosition;
}
export declare const toastStore: {
    track: (id: string | number, position: KibanToastPosition) => void;
    untrack: (id: string | number) => void;
    untrackByPosition: (position: KibanToastPosition) => (string | number)[];
    getGrouped: () => Record<KibanToastPosition, TrackedToast[]>;
    subscribe: (listener: () => void) => () => void;
    getSnapshot: () => TrackedToast[];
};
export {};
