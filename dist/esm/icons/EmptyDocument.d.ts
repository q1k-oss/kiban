import React from "react";
export interface IEmptyDocument {
    size?: number;
    className?: string;
    strokeWidth?: number;
    style?: React.CSSProperties;
}
export declare const EmptyDocument: React.FC<IEmptyDocument>;
