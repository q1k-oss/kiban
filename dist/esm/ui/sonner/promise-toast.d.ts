import type { KibanToastPosition } from "./kiban-toast";
export interface KibanPromiseOptions<T> {
    loading: string;
    success: string | ((data: T) => string);
    error: string | ((err: unknown) => string);
    description?: {
        loading?: string;
        success?: string | ((data: T) => string);
        error?: string | ((err: unknown) => string);
    };
    position?: KibanToastPosition;
}
export declare const kibanPromise: <T>(promise: Promise<T>, options: KibanPromiseOptions<T>) => string | number;
