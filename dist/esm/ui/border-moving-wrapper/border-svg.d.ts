import React from 'react';
import type { LineSegment, LineCap, AnimationMode, Variant, Size } from './types';
interface BorderSvgProps {
    clipId: string;
    size: Size;
    displayLines: LineSegment[];
    visibleCount: number;
    effectiveSegments: number;
    animationCompleted: boolean;
    strokeWidth: number;
    borderRadius: number;
    lineCapStart: LineCap;
    lineCapEnd: LineCap;
    animationMode: AnimationMode;
    variant: Variant;
    reverse: boolean;
    animate: boolean;
    ants: boolean;
    parsedBorderOffset: number;
    borderPosition: 'inner' | 'outer';
    antsGroupRef: React.RefObject<SVGGElement | null>;
}
declare const BorderSvg: React.FC<BorderSvgProps>;
export { BorderSvg };
