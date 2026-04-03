let trackedToasts = [];
let storeListeners = [];
const notifyStore = () => storeListeners.forEach((l) => l());
export const toastStore = {
    track: (id, position) => {
        trackedToasts = [...trackedToasts, { id, position }];
        notifyStore();
    },
    untrack: (id) => {
        trackedToasts = trackedToasts.filter((t) => t.id !== id);
        notifyStore();
    },
    untrackByPosition: (position) => {
        const ids = trackedToasts.filter((t) => t.position === position).map((t) => t.id);
        trackedToasts = trackedToasts.filter((t) => t.position !== position);
        notifyStore();
        return ids;
    },
    getGrouped: () => {
        return trackedToasts.reduce((acc, t) => {
            var _a;
            var _b;
            ((_a = acc[_b = t.position]) !== null && _a !== void 0 ? _a : (acc[_b] = [])).push(t);
            return acc;
        }, {});
    },
    subscribe: (listener) => {
        storeListeners.push(listener);
        return () => {
            storeListeners = storeListeners.filter((l) => l !== listener);
        };
    },
    getSnapshot: () => trackedToasts,
};
